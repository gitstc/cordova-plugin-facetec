/* only for parameters that we get from user */

module.exports.MatchFaceID = function(successCallback, errorCallback, args) {
    cordova.exec(successCallback, errorCallback, 'FaceTecSTC', 'MatchFaceID', args);
}