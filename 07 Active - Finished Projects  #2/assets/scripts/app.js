class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true); // deep copy
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(projectId, destinationSelector) {
    const projElement = document.getElementById(projectId);
    const destinationElement = document.querySelector(destinationSelector);
    destinationElement.append(projElement);
    // projElement.scrollIntoView();
    projElement.scrollIntoView({ behavior: "smooth" }); // * not supported in all browsers
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? "afterbegin" : "beforeend",
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.text = text;
    this.closeNotifier = closeNotifierFunction;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector("p").textContent = this.text;
    tooltipElement.append(tooltipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElScroll = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElScroll - 10;

    tooltipElement.style.position = "absolute";
    tooltipElement.style.left = x + "px"; // 20px
    tooltipElement.style.top = y + "px";

    tooltipElement.addEventListener("click", this.closeTooltip);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;
  constructor(id, updatedProjectListFunction, type) {
    this.id = id;
    this.updatedProjectListHandler = updatedProjectListFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }

    const projectElement = document.getElementById(this.id);
    const toolTipText = projectElement.dataset.extraInfo;

    const tooltip = new Tooltip(
      () => (this.hasActiveTooltip = false),
      toolTipText,
      this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      "button:first-of-type"
    );
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Active";
    switchBtn.addEventListener(
      "click",
      this.updatedProjectListHandler.bind(null, this.id)
    );
  }

  update(updateProjectFunction, type) {
    this.updatedProjectListHandler = updateProjectFunction;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const projList = document.querySelectorAll(`#${type}-projects li`);
    for (const proj of projList) {
      this.projects.push(
        new ProjectItem(proj.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    console.log(this);
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjects = new ProjectList("active");
    const finishedProjects = new ProjectList("finished");

    activeProjects.setSwitchHandlerFunction(
      finishedProjects.addProject.bind(finishedProjects)
    );

    finishedProjects.setSwitchHandlerFunction(
      activeProjects.addProject.bind(activeProjects)
    );

    // document
    //   .getElementById("start-analytics-btn")
    //   .addEventListener("click", this.startAnalytics);

    const timerId = setTimeout(this.startAnalytics, 3000);

    document
      .getElementById("stop-analytics-btn")
      .addEventListener("click", () => {
        clearTimeout(timerId);
      });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "assets/scripts/analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
