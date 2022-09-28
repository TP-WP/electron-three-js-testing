const { app, BrowserWindow } = require("electron");

//this is to disable deprecated and insecure content warnings
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 700,
  });
  win.loadFile("index.html");
};
//whenReady throws a warning (like app is undefined) but works anyway
//changing it to app.on("ready") doesn't fix the app undefined error and still works anyways
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
