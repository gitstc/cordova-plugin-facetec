/* only for parameters that we get from user */

module.exports.MatchFaceID = function(successCallback, errorCallback, args) {
    console.log("Match Face ID");
    cordova.exec(successCallback, errorCallback, 'FaceTecSTC', 'MatchFaceID', []);
}