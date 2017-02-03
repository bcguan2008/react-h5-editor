
const CHANGE_TITLE = "CHANGE_TITLE";
const CHANGE_LOADING = "CHANGE_LOADING";

function changeTitle(title){
  return {
    type:CHANGE_TITLE,
    title:title
  }
}

function changeLoading(loading){
  return {
    type:CHANGE_LOADING,
    loading:loading
  }
}

export {
  CHANGE_TITLE,
  CHANGE_LOADING,
  changeTitle,
  changeLoading
}