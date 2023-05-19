const videoWindow = ['Netflix', 'YouTube', 'Vimeo', 'Vine'];

console.log(videoWindow.slice(2))

const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };

Window.prototype.tabClose= function (index) {

    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(index -1); // Get the tabs after the tab
  console.log(tabsAfterIndex, tabsBeforeIndex)
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };

   const workWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);
   
   console.log(workWindow.tabClose(2).tabs)

   

   