angular.module('myDashboardApp', [ 'nvd3', 'parse-angular' ])

		.filter('fromNow', function() {
			return function(dateString) {
				// moment.lang('nb');
				return moment(dateString).fromNow();
			};
		})

		.controller('myDashboardCtrl',['$scope','$http','$interval',
						function($scope, $http, $interval) {							
							$scope.options = {
								chart : {
									type : 'lineChart',
									height : 450,
									margin : {
										top : 20,
										right : 20,
										bottom : 60,
										left : 40
									},
									x : function(d) {
								
										return d[0];
										
									},
									y : function(d) {
										return d[1];
									},
									useVoronoi : false,
									clipEdge : true,
									transitionDuration : 500,
									useInteractiveGuideline : true,
									xAxis : {
										tickFormat : function(d) {
										
											return d3.time.format('%X')(
													new Date(d))
										}
									},
									yAxis : {
										tickFormat : function(d) {
											return d3.format('d')(d);
										}
									}
								}
							};
							function queryZone(params) {
								var zone_id = params.id;
								var url = "http://localhost:8181/api/sessions.json?callback=JSON_CALLBACK&zoneId="+ zone_id;
								$http.jsonp(url).success(function(data) {
													var bots = {};
													var users = {};
													var icashUsers = {};
													var xuUsers = {};
													
													bots["key"] = "Bot "+ params.name;
													users["key"] = params.name;
													icashUsers["key"] = params.name;
													xuUsers["key"] = params.name;
													
													bots["values"] = [];
													users["values"] = [];
													icashUsers["values"] = [];
													xuUsers["values"] = [];
													angular.forEach(data,function(item,index) {
														//bot
														var userItem = [];
														userItem.push(item.timeStamp);
														userItem.push(item.bot);
														bots.values.push(userItem);
														//user
														var userItem = [];
														userItem.push(item.timeStamp);
														userItem.push(item.onlineUser);
														users.values.push(userItem);
														//icash
														var userItem = [];
														userItem.push(item.timeStamp);
														userItem.push(item.goldUser);
														icashUsers.values.push(userItem);
														//xu
														var userItem = [];
														userItem.push(item.timeStamp);
														userItem.push(item.koinUser);
														xuUsers.values.push(userItem);
                                                        if (zone_id == "0") {
                                                        	$scope.current_all_user = Number(item.onlineUser);
        													$scope.current_icash_user = Number(item.goldUser);
        													$scope.current_xu_user = Number(item.koinUser);
        													$scope.current_all_bot = Number(item.bot);
        													$scope.current_icash_bot = Number(item.goldBot);
        													$scope.current_xu_bot = Number(item.koinBot);
                                                        }

													});

													if (zone_id != "0") {
														$scope.data[$scope.data.length] = users;
														$scope.idata[$scope.idata.length] = icashUsers;
														$scope.xdata[$scope.xdata.length] = xuUsers;
													}
									});
							}
							// //////////
							function updateData() {
								$scope.data = [];
								$scope.idata = [];
								$scope.xdata = [];
								queryZone({
									id : "0",
									name : "ALL"
								});
								queryZone({
									id : "1",
									name : "TLMN"
								}); // tien len mien nam
								queryZone({
									id : "7",
									name : "TLMN ĐL"
								}); // TLMN dem la
								queryZone({
									id : "9",
									name : "PHỎM"
								}); // Phom
								queryZone({
									id : "11",
									name : "BA CÂY"
								});
								queryZone({
									id : "13",
									name : "MẬU BINH"
								});
								queryZone({
									id : "15",
									name : "LIÊNG"
								});
								queryZone({
									id : "16",
									name : "SÂM"
								}); // Sam
								queryZone({
									id : "17",
									name : "BA CÂY GÀ"
								});
								queryZone({
									id : "18",
									name : "Đập Hũ"
								});
								queryZone({
									id : "19",
									name : "Xóc đĩa"
								});
								queryZone({
									id : "20",
									name : "Bầu cua"
								});
								queryZone({
									id : "25",
									name : "TLMN solo"
								});
								queryZone({
									id : "26",
									name : "Phỏm solo"
								});
								queryZone({
									id : "27",
									name : "Sâm solo"
								});	
								queryZone({
									id : "21",
									name : "Tài xỉu"
								});	
								queryZone({
									id : "22",
									name : "Poker"
								});	
								queryZone({
									id : "24",
									name : "Spin"
								});	
							}
							updateData();
							$interval(updateData, 1000 * 600);
						} ]);

