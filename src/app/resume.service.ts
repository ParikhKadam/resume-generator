import { EventEmitter, Injectable } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { Resume, Position, Education, Skill, Project, Social, SocialType, YearAndMonth } from './models'
import { jsonResumeToResume } from 'app/util/json-resume-converter';

@Injectable()
export class ResumeService {
  public resumeChanged: EventEmitter<Resume>;

  private STORAGE_KEY = 'resume';
  private THEME_KEY = 'theme';

  // Years and months to choose from when adding new content to resume
  years: Array<number> = [];
  months: Array<string> = [];
  // All posssible education degrees
  readonly degrees: Array<string> = [
    'Associate’s Degree',
    'Bachelor’s Degree',
    'Master’s Degree',
    'Master of Business Administration (M.B.A)',
    'Juris Doctor (J.D.)',
    'Doctor of Medicine (M.D.)',
    'Doctor of Philosophy (Ph.D.)',
    'Engineer’s Degree',
    'Other']

  // If in edit mode, possible to edit
  editMode: boolean;

  constructor(location: Location) {
    // EventEmitter to let components know when the resume is changed
    this.resumeChanged = new EventEmitter(false);

    // Create years to choose from, 1950 - current years
    const today = new Date();
    for (let year = 1950; year <= today.getFullYear(); year++) {
      this.years.push(year);
    }
    // From the angular docs "By default, Angular only contains locale data for en-US."
    // TODO For future, import locales to support in app.module.ts see https://angular.io/guide/i18n#i18n-pipes
    const datePipe = new DatePipe('en-US');
    for (let month = 1; month <= 12; month++) {
      let dateString = `2016-${month < 10 ? '0' : ''}${month}-15`;
      this.months.push(datePipe.transform(dateString, 'MMMM '));
    }

    // Edit mode if path is /edit
    this.editMode = location.isCurrentPathEqualTo('/?edit');
  }

  /**
   * Saves resume in browser
   * 
   * @param {Resume}  resume  The resume to store
   */
  saveResume(resume: Resume) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(resume));
    // Tell components resume has changed
    this.resumeChanged.emit(resume);
  }

  /**
   * Retrive last saved resume stored in browser
   * 
   * @return {Resume}  Latest stored resume
   */
  retrieveResume(): Resume {
    const resumeAsString = localStorage.getItem(this.STORAGE_KEY);
    return resumeAsString ? JSON.parse(resumeAsString) : {};
  }

  /**
   * Adds a position to the saved resume and saves it.
   * 
   * @param   {Position}  position  The position to add
   * @return  {Array<Position>}     Updated positions array
   */
  addPosition(position: Position): Array<Position> {
    const currentResume = this.retrieveResume();
    currentResume.positions = (currentResume.positions || []).concat(position);
    this.saveResume(currentResume);
    return currentResume.positions;
  }

  /**
   * Update positions.
   * 
   * @param   {Array<Position>}   positions   The positons to update resume with
   * @return  {Array<Position>}               Updated positions
   */
  updatePositions(positions: Array<Position>): Array<Position> {
    const currentResume = this.retrieveResume();
    currentResume.positions = positions;
    this.saveResume(currentResume);
    return currentResume.positions;
  }

  /**
   * Removes a position.
   * 
   * @param   {Position}        position  The position to remove
   * @return  {Array<Position>}           Positions after the deletion
   */
  removePosition(position: Position): Array<Position> {
    const currentResume = this.retrieveResume();
    currentResume.positions = currentResume.positions.filter(p => p.company !== position.company);
    this.saveResume(currentResume);
    return currentResume.positions;
  }

  /**
   * Adds an education to the saved resume and saves it.
   * 
   * @param   {Education}  education  The education to add
   * @return  {Array<Education>}      Updated educations array
   */
  addEducation(education: Education): Array<Education> {
    const currentResume = this.retrieveResume();
    currentResume.educations = (currentResume.educations || []).concat(education);
    this.saveResume(currentResume);
    return currentResume.educations;
  }

  /**
   * Update educations.
   * 
   * @param   {Array<Education>}   educations   The educations to update resume with
   * @return  {Array<Education>}                Updated educations
   */
  updateEducations(educations: Array<Education>): Array<Education> {
    const currentResume = this.retrieveResume();
    currentResume.educations = educations;
    this.saveResume(currentResume);
    return currentResume.educations;
  }

  /**
   * Removes an education.
   * 
   * @param   {Education}        education  The education to remove
   * @return  {Array<Education>}            Educations after the deletion
   */
  removeEducation(education: Education): Array<Education> {
    const currentResume = this.retrieveResume();
    currentResume.educations = currentResume.educations.filter(e => e.school !== education.school);
    this.saveResume(currentResume);
    return currentResume.educations;
  }

  /**
   * Adds a skill to the saved resume and saves it.
   * 
   * @param   {Skill}  skill  The skill to add
   * @return  {Array<Skill>}  Updated skills array
   */
  addSkill(skill: Skill): Array<Skill> {
    const currentResume = this.retrieveResume();
    currentResume.skills = (currentResume.skills || []).concat(skill);
    this.saveResume(currentResume);
    return currentResume.skills;
  }

  /**
   * Update skills.
   * 
   * @param   {Array<Skill>}   skills     The skills to update resume with
   * @return  {Array<Skill>}              Updated skills
   */
  updateSkills(skills: Array<Skill>): Array<Skill> {
    const currentResume = this.retrieveResume();
    currentResume.skills = skills;
    this.saveResume(currentResume);
    return currentResume.skills;
  }

  /**
   * Removes a skill.
   * 
   * @param   {Skill}             skill   The skill to remove
   * @return  {Array<Skill>}              Skills after the deletion
   */
  removeSkill(skill: Skill): Array<Skill> {
    const currentResume = this.retrieveResume();
    currentResume.skills = currentResume.skills.filter(s => s.name !== skill.name);
    this.saveResume(currentResume);
    return currentResume.skills;
  }

  /**
   * Adds a project to the saved resume and saves it.
   * 
   * @param   {Project}         project   The project to add
   * @return  {Array<Project>}            Updated projects array
   */
  addProject(project: Project): Array<Project> {
    const currentResume = this.retrieveResume();
    currentResume.projects = (currentResume.projects || []).concat(project);
    this.saveResume(currentResume);
    return currentResume.projects;
  }

  /**
   * Update projects.
   * 
   * @param   {Array<Project>}    projects     The projects to update resume with
   * @return  {Array<Project>}                 Updated projects
   */
  updateProjects(projects: Array<Project>): Array<Project> {
    const currentResume = this.retrieveResume();
    currentResume.projects = projects;
    this.saveResume(currentResume);
    return currentResume.projects;
  }

  /**
   * Stores current app theme
   * 
   * @param themeName Name of the theme (css-class)
   * @param isDark    True if it's dark themed
   */
  updateTheme(themeName: string, isDark: boolean) {
    localStorage.setItem(this.THEME_KEY, JSON.stringify({themeName: themeName, isDark: isDark}));
  }

  /**
   * Retrieve last saved theme
   * 
   * @return Theme name and if it's dark
   */
  retrieveTheme(): {themeName: string, isDark: boolean} {
    const themeAsString = localStorage.getItem(this.THEME_KEY);
    return themeAsString ? JSON.parse(themeAsString) : {};
  }

  /**
   * Removes a project.
   * 
   * @param   {Project}             project   The project to remove
   * @return  {Array<Project>}                Projects after the deletion
   */
  removeProject(project: Project): Array<Project> {
    const currentResume = this.retrieveResume();
    currentResume.projects = currentResume.projects.filter(s => s.name !== project.name);
    this.saveResume(currentResume);
    return currentResume.projects;
  }

  /**
   * Update resume personal information.
   */
  updateSummary(name: string, profileUrl: string, description: string, title: string,
                phone: string, email: string, socials: Array<Social>): Resume {
    const currentResume = this.retrieveResume();
    currentResume.name = name;
    currentResume.pictureUrl = profileUrl;
    currentResume.summary = description;
    currentResume.title = title;
    currentResume.phone = phone;
    currentResume.email = email;
    currentResume.social = socials;
    this.saveResume(currentResume);
    return currentResume;
  }

  /**
   * Parse and save a resume stored in the standardized json resume format (https://github.com/jsonresume/resume-schema/blob/0.0.0/schema.json)
   * 
   * @param jsonResume A json resume object
   */
  parseAndSaveJsonResume(jsonResume) {
    const resume = jsonResumeToResume(jsonResume);
    this.saveResume(resume);
  }

  /**
   * @return {YearAndMonth}   Todays date as YearAndMonth object
   */
  todayAsYearMonth(): YearAndMonth {
    return this.dateAsYearMonth(new Date());
  }

  /**
   * @return  {YearAndMonth}   A date as YearAndMonth object
   */
  dateAsYearMonth(d: Date): YearAndMonth {
    return d ? {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth()
    } : null
  }
}
