const keys = require('../../config/keys');

module.exports = (survey) => {
 return `
  <html>
  <body>
   <div style = "text-align: center;">
   <h3>I would like your input for this form!!</h3>
   <p>Please answer the following question:</p>
   <p>${survey.body}</p>
   <div>
    <a href= "${keys.redirectDomain}/api/surveys/${survey.id}/YES">YES</a>
   </div>
   <div>
    <a href= "${keys.redirectDomain}/api/surveys/${survey.id}/NO">NO</a>
   </div>
   </div>
  </body>
  </html>
 `;
};