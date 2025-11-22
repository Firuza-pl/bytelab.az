
function changeLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelector('#titleIndex').textContent = data.titleIndex;
      document.querySelector('#subtitleIndex').textContent = data.subtitleIndex;
      document.querySelector('#homeIndex').textContent = data.homeIndex;
      document.querySelector('#aboutIndex').textContent = data.aboutIndex;
      document.querySelector('#featureIndex').textContent = data.featuresIndex;
      document.querySelector('#serviceIndex').textContent = data.servicesIndex;
      document.querySelector('#historyIndex').textContent = data.historyIndex;
      document.querySelector('#contactIndex').textContent = data.contactIndex;
      document.querySelector('#contactUsIndex').textContent = data.contactUsIndex;
      document.querySelector('#aboutUsIndex').textContent = data.aboutUsIndex;
      document.querySelector('#aboutUsTextIndex').textContent = data.aboutUsTextIndex;
      document.querySelector('#aboutUsSyllabusIndex').textContent = data.aboutUsSyllabusIndex;
      document.querySelector('#aboutUsButtonIndex').textContent = data.aboutUsButtonIndex;
      document.querySelector('#aboutUsButtonIndex2').textContent = data.aboutUsButtonIndex2;
      document.querySelector('#aboutUsButtonIndex3').textContent = data.aboutUsButtonIndex3;
      document.querySelector('#backendDevelopmentIndex').textContent = data.backendDevelopmentIndex;
      document.querySelector('#backendDevelopmentIndex2').textContent = data.backendDevelopmentIndex;
      document.querySelector('#databaseManagementIndex').textContent = data.databaseManagementIndex;
      document.querySelector('#demoLessonsIndex').textContent = data.demoLessonsIndex;
      document.querySelector('#demoLessonsIndex2').textContent = data.demoLessonsIndex2;
      document.querySelector('#demoLessonsIndex3').textContent = data.demoLessonsIndex3;
      document.querySelector('#bookLessonIndex').textContent = data.bookLessonIndex;
      document.querySelector('#bookLessonIndex2').textContent = data.bookLessonIndex2;
      document.querySelector('#bookLessonIndex3').textContent = data.bookLessonIndex3;
      document.querySelector('#featuresTitleIndex').textContent = data.featuresTitleIndex;
      document.querySelector('#featuresSubtitleIndex').textContent = data.featuresSubtitleIndex;
      document.querySelector('#featuresItem1Index').textContent = data.featuresItem1Index;
      document.querySelector('#featuresItem1TextIndex').textContent = data.featuresItem1TextIndex;
      document.querySelector('#featuresItem2Index').textContent = data.featuresItem2Index;
      document.querySelector('#featuresItem2TextIndex').textContent = data.featuresItem2TextIndex;
      document.querySelector('#featuresItem3Index').textContent = data.featuresItem3Index;
      document.querySelector('#featuresItem3TextIndex').textContent = data.featuresItem3TextIndex;
      document.querySelector('#featuresItem4Index').textContent = data.featuresItem4Index;
      document.querySelector('#featuresItem4TextIndex').textContent = data.featuresItem4TextIndex;
      document.querySelector('#servicesTitleIndex').textContent = data.servicesTitleIndex;
      document.querySelector('#servicesSubtitleIndex').textContent = data.servicesSubtitleIndex;
      document.querySelector('#servicesItem1Index').textContent = data.servicesItem1Index;
      document.querySelector('#servicesItem2Index').textContent = data.servicesItem2Index;
      document.querySelector('#servicesList1Index').textContent = data.servicesList1Index;
      document.querySelector('#servicesList2Index').textContent = data.servicesList2Index;
      document.querySelector('#servicesList3Index').textContent = data.servicesList3Index;
      document.querySelector('#servicesList4Index').textContent = data.servicesList4Index;
      document.querySelector('#servicesItem3TitleIndex').textContent = data.servicesItem3TitleIndex;
      document.querySelector('#servicesItem3Index').textContent = data.servicesItem3Index;
      document.querySelector('#servicesList5Index').textContent = data.servicesList5Index;
      document.querySelector('#servicesList6Index').textContent = data.servicesList6Index;
      document.querySelector('#servicesList7Index').textContent = data.servicesList7Index;
      document.querySelector('#servicesList8Index').textContent = data.servicesList8Index;
      document.querySelector('#codinTitleIndex').textContent = data.codinTitleIndex;
      document.querySelector('#codingDescIndex').textContent = data.codingDescIndex;
      document.querySelector('#codingButtonIndex').textContent = data.codingButtonIndex;
      document.querySelector('#contatctTitleIndex').textContent = data.contatctTitleIndex;
      document.querySelector('#contatctSubTitleIndex').textContent = data.contatctSubTitleIndex;
      document.querySelector('#contactAddressTitleIndex').textContent = data.contactAddressTitleIndex;
      document.querySelector('#contactCallTitleIndex').textContent = data.contactCallTitleIndex;
      document.querySelector('#contactWpTitleIndex').textContent = data.contactWpTitleIndex;
      document.querySelector('#contactAddressSubTitleIndex').textContent = data.contactAddressSubTitleIndex;
      document.querySelector('#contactWpSubTitleIndex').textContent = data.contactWpSubTitleIndex;
      document.querySelector('#contactWpSubTitleIndex').textContent = data.contactWpSubTitleIndex;
      document.querySelector('#contatFormNameIndex').textContent = data.contatFormNameIndex;
      document.querySelector('#contatFormEmailIndex').textContent = data.contatFormEmailIndex;
      document.querySelector('#contatFormSubjectIndex').textContent = data.contatFormSubjectIndex;
      document.querySelector('#contatFormMessageIndex').textContent = data.contatFormMessageIndex;
      document.querySelector('#contatFormButtonIndex').textContent = data.contatFormButtonIndex;
      document.querySelector('#footerTitleIndex').textContent = data.footerTitleIndex;
      document.querySelector('#footerSubtitleTitleIndex').textContent = data.footerSubtitleTitleIndex;
      document.querySelector('#portTitleIndex').textContent = data.portTitleIndex;
      document.querySelector('#portSubtitleIndex').textContent = data.portSubtitleIndex;
      document.querySelector('#portContact').textContent = data.portContact;






    });
}