(function () {

  var projects = [
    {
      NAME: 'DBMCM',
      COMPANY: 'HCL Technologies',
      CLIENT: 'Google',
      SPAN: '14/03/2016 - 11/05/15',
      RESPONSIBILITIES: 'Goals Management, LDAP Picker, File Upload.',
      LINK: '',
      DESCRIPTION: `DBMCM is a double click bid management, mainly used for ad management.
            The features include listing various advertisers, creating a goal on how ad should perform and tracking goal.
            Analysis of whether goal is underperforming or performing well.
            Client context for adding contacts of both internal and external and taking feedback of client.`
    },
    {
      NAME: 'Calibre',
      COMPANY: 'HCL Technologies',
      CLIENT: 'Google',
      SPAN: '11/02/2016 - Till Date',
      RESPONSIBILITIES: 'Ad Lookup, Admin Reports.',
      LINK: '',
      DESCRIPTION: `Calibre is the ad review tool in google. The features include rendering various types of ad like text, 
            video, digital media, moving ads etc. and voting a decision on the ad.
            The ad can be reviewed again by top level reviewer. If the decision mis matches then the same ad is passed to a 
            google reviewer for taking final decision. The reviewer can even claim on his decision if he feels it is correct.`
    },
  ];

  var projectsNode;

  var PROJECT_HTML =
    `<div class="row">
          <div class="col col-xs-6 col-sm-6 col-md-6 col-lg-6 PROJECTNAME_CLASS"><h5>PROJECT_NAME</h5></div>
          <div class="col col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right PROJECTSPAN_CLASS"><h6>PROJECT_SPAN</h6></div>
       </div>
       <div class="row">
          <div class="col col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h6 class="PROJECTCOMPANY_CLASS">Company: PROJECT_COMPANY</h6>
            <h6 class="PROJECTCLIENT_CLASS">Client: PROJECT_CLIENT</h6>
          </div>
          <div class="col col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right PROJECTLINK_CLASS"><h6>PROJECT_LINK</h6></div>
       </div>
       <div class="row PROJECTDESCRIPTION_CLASS">
          <div class="col col-md-12">
            <p>PROJECT_DESCRIPTION</p>
          </div>
       </div>
       <div class="row PROJECTRESPONSIBILITIES_CLASS">
          <div class="col col-md-12">
            <b>Responsibilities:</b>
            PROJECT_RESPONSIBILITIES
          </div>
       </div>`;

  var renderProjects = function () {
    projects.forEach(function (project, index) {
      projectsNode = target.getElementsByTagName('projects')[0];
      renderProject(project, index);
    });
  };

  var renderProject = function (project, index) {
    var projectNode = document.createElement('project');
    var currentProjectHTML = PROJECT_HTML;
    var projectDetails = Object.keys(project);
    // loop through keys in the project object.
    projectDetails.forEach(function (detail) {
      if (!!project[detail]) {
        currentProjectHTML = currentProjectHTML.replace('PROJECT_' + detail, project[detail]);
      } else {
        currentProjectHTML = currentProjectHTML.replace('PROJECT' + detail + '_CLASS', 'hidden');
      }
    });
    // projectNode.style.animationDelay = 2 * index + 's';
    projectNode.innerHTML = currentProjectHTML;
    projectsNode.appendChild(projectNode);
  };

  // As Profile is loaded via ajax, star-rating will not be present initially
  // listen to top node attachment to sidebar and call fillStarRating.

  // select the target node
  var target = document.getElementsByTagName('profile')[0];

  // create an observer instance
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      renderProjects();
      observer.disconnect();
    });
  });

  // configuration of the observer:
  var config = { childList: true };

  // pass in the target node, as well as the observer options
  observer.observe(target, config);
})();
