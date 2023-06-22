import { Box, Typography } from "@mui/material";
import { google, sheets_v4 } from "googleapis";
import { useState, useEffect } from "react";

const TeamProgress = () => {
  const [cellValue, setCellValue] = useState<string>("");

  useEffect(() => {
    const initGoogleSheets = async () => {
      // Load the Google Sheets API and authenticate
      const auth = new google.auth.GoogleAuth({
        keyFile: `./${import.meta.env.KEYFILE}` ?? "",
        scopes:
          // import.meta.env.SCOPES ??
          "https://www.googleapis.com/auth/spreadsheets",
      });

      // Create client instance for auth
      const client = await auth.getClient();
      const sheets: sheets_v4.Sheets = google.sheets({ version: "v4", auth });

      // Get the cell value from the Google Sheets API
      const spreadsheetId = `${import.meta.env.ID}`;
      const range = "Sheet1!A:D"; // Update with your desired range

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      const values = response.data.values;
      if (values && values.length > 0) {
        setCellValue(values[0][0] as string); // Assuming single cell value
      }
    };

    initGoogleSheets();
  }, []);

  return (
    <Box>
      <Typography>Team Progress</Typography>
      <Box>{cellValue}</Box>
    </Box>
  );
};

export default TeamProgress;
