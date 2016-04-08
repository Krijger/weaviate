'use strict';
/**                         _       _
 *                         (_)     | |
 *__      _____  __ ___   ___  __ _| |_ ___
 *\ \ /\ / / _ \/ _` \ \ / / |/ _` | __/ _ \
 * \ V  V /  __/ (_| |\ V /| | (_| | ||  __/
 *  \_/\_/ \___|\__,_| \_/ |_|\__,_|\__\___|
 *
 * Copyright © 2016 Weaviate. All rights reserved.
 * LICENSE: https://github.com/weaviate/weaviate/blob/master/LICENSE
 * See www.weaviate.com for details
 * See package.json for author and maintainer info
 * Contact: @weaviate_iot / yourfriends@weaviate.com
 */
const ACTIONS = require('./actions.js');
module.exports = {
    /**
     * get
     *
     * @param i  input URL
     * @param  weaveObject  OBJ Object with the send in body and params*/
  get: (i, weaveObject, Q) => {
      var deferred = Q.defer();
      try {
            /**
             * Validate if the provide body is correct
             */
          ACTIONS.validateBodyObject(weaveObject, [], (result) => {
              switch (result) {
                  case true:
                        /**
                         * Provided body is correct, handle the request
                         */
                    ACTIONS.process('weave.modelManifests.get', [
                            /**
                             * description  array
                             * type  List of applications recommended to use with a device model.
                             */
                          'applications',
                            /**
                             * description  string
                             * type  URL of image showing a confirmation button.
                             */
                          'confirmationImageUrl',
                            /**
                             * description  string
                             * type  URL of device image.
                             */
                          'deviceImageUrl',
                            /**
                             * description  string
                             * type  Device kind, see "deviceKind" field of the Device resource.
                             * enum  accessPoint, aggregator, camera, developmentBoard, lock, printer, scanner, speaker, storage, toy, vendor, video
                             */
                          'deviceKind',
                            /**
                             * description  string
                             * type  Unique model manifest ID.
                             */
                          'id',
                            /**
                             * description  string
                             * type  Identifies what kind of resource this is. Value: the fixed string "weave#modelManifest".
                             */
                          'kind',
                            /**
                             * description  string
                             * type  User readable device model description.
                             */
                          'modelDescription',
                            /**
                             * description  string
                             * type  User readable device model name.
                             */
                          'modelName',
                            /**
                             * description  string
                             * type  User readable name of device model manufacturer.
                             */
                          'oemName',
                            /**
                             * description  string
                             * type  URL of device support page.
                             */
                          'supportPageUrl'
                        ], (processResult) => {
                          switch (processResult) {
                              case false:
                                deferred.reject('Something processing this request went wrong');
                              default:
                                deferred.resolve(processResult);
                            }
                        });
                    break;
                  case false:
                        /**
                         * Provided body is incorrect, send error
                         */
                    deferred.reject('Provided body is incorrect');
                    break;
                }
            });
        } catch (error) {
          deferred.reject(error);
        }
      return deferred.promise;
    },
    /**
     * list
     *
     * @param i  input URL
     * @param  weaveObject  OBJ Object with the send in body and params*/
  list: (i, weaveObject, Q) => {
      var deferred = Q.defer();
      try {
            /**
             * Validate if the provide body is correct
             */
          ACTIONS.validateBodyObject(weaveObject, [], (result) => {
              switch (result) {
                  case true:
                        /**
                         * Provided body is correct, handle the request
                         */
                    ACTIONS.process('weave.modelManifests.list', [
                            /**
                             * description  string
                             * type  Identifies what kind of resource this is. Value: the fixed string "weave#modelManifestsListResponse".
                             */
                          'kind',
                            /**
                             * description  array
                             * type  The actual list of model manifests.
                             */
                          'modelManifests',
                            /**
                             * description  string
                             * type  Token corresponding to the next page of model manifests.
                             */
                          'nextPageToken',
                            /**
                             * description  integer
                             * type  The total number of model manifests for the query. The number of items in a response may be smaller due to paging.
                             * format  int32
                             */
                          'totalResults'
                        ], (processResult) => {
                          switch (processResult) {
                              case false:
                                deferred.reject('Something processing this request went wrong');
                              default:
                                deferred.resolve(processResult);
                            }
                        });
                    break;
                  case false:
                        /**
                         * Provided body is incorrect, send error
                         */
                    deferred.reject('Provided body is incorrect');
                    break;
                }
            });
        } catch (error) {
          deferred.reject(error);
        }
      return deferred.promise;
    },
    /**
     * validateCommandDefs
     *
     * @param i  input URL
     * @param  weaveObject  OBJ Object with the send in body and params*/
  validateCommandDefs: (i, weaveObject, Q) => {
      var deferred = Q.defer();
      try {
            /**
             * Validate if the provide body is correct
             */
          ACTIONS.validateBodyObject(weaveObject, ['commandDefs'], (result) => {
              switch (result) {
                  case true:
                        /**
                         * Provided body is correct, handle the request
                         */
                    ACTIONS.process('weave.modelManifests.validateCommandDefs', [
                            /**
                             * description  array
                             * type  Validation errors in command definitions.
                             */
                          'validationErrors'
                        ], (processResult) => {
                          switch (processResult) {
                              case false:
                                deferred.reject('Something processing this request went wrong');
                              default:
                                deferred.resolve(processResult);
                            }
                        });
                    break;
                  case false:
                        /**
                         * Provided body is incorrect, send error
                         */
                    deferred.reject('Provided body is incorrect');
                    break;
                }
            });
        } catch (error) {
          deferred.reject(error);
        }
      return deferred.promise;
    },
    /**
     * validateDeviceState
     *
     * @param i  input URL
     * @param  weaveObject  OBJ Object with the send in body and params*/
  validateDeviceState: (i, weaveObject, Q) => {
      var deferred = Q.defer();
      try {
            /**
             * Validate if the provide body is correct
             */
          ACTIONS.validateBodyObject(weaveObject, ['state'], (result) => {
              switch (result) {
                  case true:
                        /**
                         * Provided body is correct, handle the request
                         */
                    ACTIONS.process('weave.modelManifests.validateDeviceState', [
                            /**
                             * description  array
                             * type  Validation errors in device state.
                             */
                          'validationErrors'
                        ], (processResult) => {
                          switch (processResult) {
                              case false:
                                deferred.reject('Something processing this request went wrong');
                              default:
                                deferred.resolve(processResult);
                            }
                        });
                    break;
                  case false:
                        /**
                         * Provided body is incorrect, send error
                         */
                    deferred.reject('Provided body is incorrect');
                    break;
                }
            });
        } catch (error) {
          deferred.reject(error);
        }
      return deferred.promise;
    },
};