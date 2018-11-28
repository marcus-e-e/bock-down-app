import config from "../config";
/**
 * Load the bets from the spreadsheet
 * Get the right values from it and assign.
 */
export function getBets(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A1:B"
      })
      .then(
        response => {
          const data = response.result.values;
          const bets = data.map(bet => ({
            name: bet[0],
            bet: bet[1],
          })) || [];
          callback({
            bets
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}

export function getEndDate(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!C1:C1"
      })
      .then(
        response => {
          const data = response.result.values;
          const endDate = data? data[0][0] : null;
          callback({
            endDate
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
