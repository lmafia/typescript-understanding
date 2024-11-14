// validation decorator
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}

// autoBind decorator
function autoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };
  return adjDescriptor;
}

// Project Sate Management

type Listener = (items: Project[]) => void;

class ProjectState {
  private listeners: Listener[] = [];
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = {
      id: Math.random().toString(),
      title: title,
      description: description,
      people: numOfPeople,
      status: Status.Active,
    };
    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }

  addListener(listenerFn: Listener) {
    this.listeners.push(listenerFn);
  }
}

// Project Class
enum Status {
  Active = 'active',
  Finished = 'finished',
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: Status,
  ) {}
}

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  insertAtBeginning: boolean;
  hostElement: T;
  element: U;

  protected constructor(
    templateId: string,
    hostElementId: string,
    insertAtBeginning: boolean,
    elementId?: string,
  ) {
    this.templateElement = document.getElementById(
      templateId,
    )! as HTMLTemplateElement;

    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true,
    );
    this.element = importedNode.firstElementChild as U;

    if (elementId) {
      // this.element.id = `${this.type}-projects`;
      this.element.id = elementId;
    }
    this.insertAtBeginning = insertAtBeginning;
    this.attach(insertAtBeginning);
  }

  private attach(insertAtBegging: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBegging ? 'afterbegin' : 'beforeend',
      this.element,
    );
  }

  abstract configure(): void;

  abstract renderContent(): void;
}

// ProjectInput Class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleElement: HTMLInputElement;
  descriptionElement: HTMLInputElement;
  peopleElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');

    this.titleElement = this.element.querySelector(
      '#title',
    )! as HTMLInputElement;
    this.descriptionElement = this.element.querySelector(
      '#description',
    )! as HTMLInputElement;
    this.peopleElement = this.element.querySelector(
      '#people',
    )! as HTMLInputElement;

    this.configure();
  }

  @autoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const gatherUserInput = this.gatherUserInput();
    if (Array.isArray(gatherUserInput)) {
      const [title, description, people] = gatherUserInput;
      console.log(title, description, people);

      ProjectState.getInstance().addProject(title, description, people);

      this.clearInputs();
    }
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleElement.value;
    const enteredDescription = this.descriptionElement.value;
    const enteredPeople = this.peopleElement.value;

    if (
      !validate({ value: enteredTitle, required: true }) ||
      !validate({ value: enteredDescription, required: true, minLength: 5 }) ||
      !validate({ value: +enteredPeople, required: true, min: 1 })
    ) {
      alert('Invalid input, please try again!');
      return;
    }

    return [enteredTitle, enteredDescription, +enteredPeople];
  }

  private clearInputs() {
    this.titleElement.value = '';
    this.descriptionElement.value = '';
    this.peopleElement.value = '';
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent(): void {}
}

// ProjectItem Class
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  private project: Project;

  get persons() {
    return this.project.people === 1
      ? '1 person'
      : `${this.project.people} persons`;
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;
    this.renderContent();
  }

  configure(): void {}

  renderContent(): void {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = `${this.persons} assigned`;
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}

// ProjectList Class
class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProjects: Project[];

  // This means that the type property can only be accessed within the class and cannot be modified from outside the class.
  constructor(private type: Status) {
    super('project-list', 'app', false, `${type}-projects`);
    this.assignedProjects = [];
    this.configure();
    this.renderContent();
  }

  configure() {
    ProjectState.getInstance().addListener((projects: Project[]) => {
      this.assignedProjects = projects.filter((prj) => {
        return prj.status === this.type;
      });
      this.renderProjects();
    });
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`,
    )! as HTMLUListElement;
    listEl.innerHTML = '';
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
      // const listItem = document.createElement('li');
      // listItem.textContent = prjItem.title;
      // listEl.appendChild(listItem);
    }
  }

  renderContent() {
    this.element.querySelector('ul')!.id = `${this.type}-projects-list`;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';

    // const listItem = document.createElement('li');
    // listItem.textContent = 'Content';
    // this.element.appendChild(listItem);
  }
}

// initialize app
const projectInput = new ProjectInput();
const activeProjectList = new ProjectList(Status.Active);
const finishedProjectList = new ProjectList(Status.Finished);
