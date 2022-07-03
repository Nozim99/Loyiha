window.addEventListener('DOMContentLoaded', () => {

  const tabContent = document.querySelectorAll('.tabcontent');
  const tabHeadersItem = document.querySelectorAll('.tabheader__item');
  const tabsParent = document.querySelector('.tabheader__items');


  


  tabsParent.addEventListener('click', (event)=>{
    if(event && event.target.classList.contains('tabheader__item')){
      tabHeadersItem.forEach((item, index)=>{
        if(event.target == item){
          showTabs(index)
        }
      })
    }
  })

  function showTabs (i=0){
    tabContent.forEach(e=>{
      e.style.display = 'none';
      e.classList.remove('fade');
    })
    tabContent[i].style.display = 'block';
    tabContent[i].classList.add('fade')

    tabHeadersItem.forEach(e=>{
      e.classList.remove('tabheader__item_active');
    })
    tabHeadersItem[i].classList.add('tabheader__item_active')
  }

  showTabs()

  // tabHeadersItem.forEach((item, index) => {
  //   item.addEventListener('click', (e) => {

  //     tabHeaderStyle(tabHeadersItem, item);

  //     hideTabHeader(tabContent);
  //     tabContent.forEach((context, indexNumber) => {
  //       if (index == indexNumber) {
  //         context.style.display = 'block';
  //       }
  //     })
  //   })
  // })


  // // displayni none qiladi
  // function hideTabHeader(e) {
  //   e.forEach((item, index) => {
  //     item.style.display = 'none';
  //   })
  // }
  // // class o'chiradi va qo'shadi
  // function tabHeaderStyle(e, v) {
  //   e.forEach(domItem => {
  //     domItem.classList.remove('tabheader__item_active');
  //     v.classList.add('tabheader__item_active');
  //   })
  // }
})