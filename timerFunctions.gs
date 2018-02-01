
function setLastUpdatedFor(which) {
  which = which || "sheet_updated_at";
  createOrFindTimerCells[which].setValue(new Date());
}

function getLastUpdatedFor(which) {
  which = which || "sheet_updated_at";
  return createOrFindTimerCells[which].getValue();
}

function onEdit(e) {
  setUpdatedAt();
}

function createOrFindTimerCells() {
  var timer_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("update_timer");
  if (timer_sheet == null) {
    timer_sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("update_timer");
    timer_sheet.getRange("A1").setValue("Sheet last updated at:");
    timer_sheet.setColumnWidth(1, 154);
    timer_sheet.setColumnWidth(2, 160);
    timer_sheet.getRange("B1").setNumberFormat("mm/dd/yyyy hh:mm:ss");
    timer_sheet.getRange("A1").setValue("S3 last synced at:");
    timer_sheet.getRange("B1").setNumberFormat("mm/dd/yyyy hh:mm:ss");
    timer_sheet.hideSheet();
  } 
  SpreadsheetApp.getActiveSpreadsheet().setNamedRange("sheet_updated_at", timer_sheet.getRange("B1"));
  SpreadsheetApp.getActiveSpreadsheet().setNamedRange("s3_updated_at", timer_sheet.getRange("B2"));
  // return timer_sheet.getRange("B1");
  return {"sheet_updated_at": timer_sheet.getRange("B1"), "s3_updated_at": timer_sheet.getRange("B2")};
}