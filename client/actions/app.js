
const CHANGE_TITLE = "CHANGE_TITLE";

function changeTitle(title){
  return {
    type:CHANGE_TITLE,
    title:title
  }
}

export {
  CHANGE_TITLE,
  changeTitle
}