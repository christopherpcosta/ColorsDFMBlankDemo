(function () {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  chrome.runtime.onMessage.addListener((message) => {
    console.log("I've received this message with color name: " + message.command);

    // let allCaseNumberinTheList = document.querySelectorAll("label");

    // for(let eachElement of allCaseNumberinTheList)
    // {
    //   let isNumberMatch = eachElement.innerHTML.match(/\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d/);

    //   if(isNumberMatch != null)
    //   {
    //     console.log(isNumberMatch);
    //   }
    // }

    let allCaseNumberinTheList = document.querySelectorAll("div[aria-label]");

    for (let eachElement of allCaseNumberinTheList) {
      let isNumberMatch2 = eachElement.ariaLabel.match(/\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d/);

      

      if (isNumberMatch2 != null) {
        eachElement.style.color = message.command;

        console.log(isNumberMatch2);

        let caseNumber = isNumberMatch2[0];

        chrome.storage.sync.set({caseNumber: message.command}, function() {
          
          console.log('Value is set to ' + message.command);

          chrome.storage.sync.get([caseNumber], function(result) {
            console.log(result);
          });

        });
        



      }

      return
    }

  });

})();
