export const fixHandle=(callback)=>{
    const isTextSelected = window.getSelection().rangeCount > 0;
    if (!isTextSelected) {
      
      callback()
      return;
    }
}