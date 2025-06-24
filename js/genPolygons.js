 function addNewPolyCoords(coords,polyType) {
		// SECURITY CHECK POLYGONS
		if (polyType == "SECURITY"){
                coords1 = [     new google.maps.LatLng(41.7958835,12.2544303),  new google.maps.LatLng(41.7960934,12.2540333),   new google.maps.LatLng(41.7957115,12.2537356),  new google.maps.LatLng(41.7955235,12.2541406),   new google.maps.LatLng(41.7958835,12.2544303),   ];

                var poly1 = new google.maps.Polygon({
                map: map,
                paths: coords1,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly1);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "security-check1-t1";
                google.maps.event.addListener(poly1.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly1.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly1.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly1, 'dragstart', startDrag);
                google.maps.event.addListener(poly1, 'dragend', endDrag);

                coords2 = [     new google.maps.LatLng(41.795887,12.2547782),   new google.maps.LatLng(41.795756,12.2546575),    new google.maps.LatLng(41.795596,12.2550021),   new google.maps.LatLng(41.795736,12.2551108),    new google.maps.LatLng(41.795887,12.2547782),    ];

                var poly2 = new google.maps.Polygon({
                map: map,
                paths: coords2,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly2);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "security-check2-t1";
                google.maps.event.addListener(poly2.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly2.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly2.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly2, 'dragstart', startDrag);
                google.maps.event.addListener(poly2, 'dragend', endDrag);

                coords3 = [     new google.maps.LatLng(41.7962669,12.2514101),  new google.maps.LatLng(41.796053,12.251563),     new google.maps.LatLng(41.796213,12.2521035),   new google.maps.LatLng(41.7964359,12.2520136),   new google.maps.LatLng(41.7962669,12.2514101),   ];

                var poly3 = new google.maps.Polygon({
                map: map,
                paths: coords3,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly3);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "security-check3-t3";
                google.maps.event.addListener(poly3.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly3.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly3.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly3, 'dragstart', startDrag);
                google.maps.event.addListener(poly3, 'dragend', endDrag);

                coords4 = [     new google.maps.LatLng(41.795807,12.2503077),   new google.maps.LatLng(41.7956571,12.25047),     new google.maps.LatLng(41.796034,12.2512291),   new google.maps.LatLng(41.7962599,12.2514034),   new google.maps.LatLng(41.7963179,12.2512653),   new google.maps.LatLng(41.795807,12.2503077),   ];

                var poly4 = new google.maps.Polygon({
                map: map,
                paths: coords4,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly4);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "passport-check-t3";
                google.maps.event.addListener(poly4.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly4.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly4.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly4, 'dragstart', startDrag);
                google.maps.event.addListener(poly4, 'dragend', endDrag);

                coords5 = [     new google.maps.LatLng(41.7954573,12.2496828),  new google.maps.LatLng(41.7953053,12.2498303),   new google.maps.LatLng(41.7955813,12.2503479),  new google.maps.LatLng(41.7957392,12.2502058),   new google.maps.LatLng(41.7954573,12.2496828),   ];

                var poly5 = new google.maps.Polygon({
                map: map,
                paths: coords5,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly5);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "security-check1-t3";
                google.maps.event.addListener(poly5.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly5.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly5.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly5, 'dragstart', startDrag);
                google.maps.event.addListener(poly5, 'dragend', endDrag);

                coords6 = [     new google.maps.LatLng(41.7950908,12.2495118),  new google.maps.LatLng(41.7949849,12.2496144),   new google.maps.LatLng(41.7950369,12.2497103),  new google.maps.LatLng(41.7951423,12.2496051),   new google.maps.LatLng(41.7950908,12.2495118),   ];

                var poly6 = new google.maps.Polygon({
                map: map,
                paths: coords6,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly6);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "security-check2-t3";
                google.maps.event.addListener(poly6.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly6.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly6.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly6, 'dragstart', startDrag);
                google.maps.event.addListener(poly6, 'dragend', endDrag);

                coords7 = [     new google.maps.LatLng(41.7948974,12.2485523),  new google.maps.LatLng(41.7947529,12.2486759),   new google.maps.LatLng(41.7948309,12.24881),    new google.maps.LatLng(41.7949688,12.248692),    new google.maps.LatLng(41.7948974,12.2485523),   ];

                var poly7 = new google.maps.Polygon({
                map: map,
                paths: coords7,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly7);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "passport-check-satellite";
                google.maps.event.addListener(poly7.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly7.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly7.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly7, 'dragstart', startDrag);
                google.maps.event.addListener(poly7, 'dragend', endDrag);

                coords8 = [     new google.maps.LatLng(41.7969416,12.2521405),  new google.maps.LatLng(41.7970785,12.2518441),   new google.maps.LatLng(41.7969616,12.2517636),  new google.maps.LatLng(41.7970215,12.2515839),   new google.maps.LatLng(41.7969686,12.2515531),   new google.maps.LatLng(41.7967896,12.2520184),  new google.maps.LatLng(41.7969416,12.2521405),   ];

                var poly8 = new google.maps.Polygon({
                map: map,
                paths: coords8,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly8);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "passport-check3-t1";
                google.maps.event.addListener(poly8.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly8.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly8.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly8, 'dragstart', startDrag);
                google.maps.event.addListener(poly8, 'dragend', endDrag);
		}
		// RUNWAY POYGONS
		if (polyType == "RUNWAY"){
                coords1 = [     new google.maps.LatLng(41.7813588,12.2401381),  new google.maps.LatLng(41.7807308,12.2404009),   new google.maps.LatLng(41.7809508,12.2414846),  new google.maps.LatLng(41.7815988,12.2411359),   new google.maps.LatLng(41.7813588,12.2401381),   ];

                var poly1 = new google.maps.Polygon({
                map: map,
                paths: coords1,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly1);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "Take-off-point1-Runway1";
                google.maps.event.addListener(poly1.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly1.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly1.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly1, 'dragstart', startDrag);
                google.maps.event.addListener(poly1, 'dragend', endDrag);

                coords2 = [     new google.maps.LatLng(41.8159322,12.2255888),  new google.maps.LatLng(41.8161721,12.2266724),   new google.maps.LatLng(41.8166919,12.2264471),  new google.maps.LatLng(41.8164559,12.225358),    new google.maps.LatLng(41.8159322,12.2255888),   ];

                var poly2 = new google.maps.Polygon({
                map: map,
                paths: coords2,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly2);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "take-off-point2-runway1";
                google.maps.event.addListener(poly2.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly2.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly2.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly2, 'dragstart', startDrag);
                google.maps.event.addListener(poly2, 'dragend', endDrag);

                coords3 = [     new google.maps.LatLng(41.8467063,12.2608168),  new google.maps.LatLng(41.8464066,12.2609348),   new google.maps.LatLng(41.8465705,12.2616),     new google.maps.LatLng(41.8468702,12.2614659),   new google.maps.LatLng(41.8467063,12.2608168),   ];

                var poly3 = new google.maps.Polygon({
                map: map,
                paths: coords3,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly3);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "Take-off-point1-runway2";
                google.maps.event.addListener(poly3.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly3.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly3.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly3, 'dragstart', startDrag);
                google.maps.event.addListener(poly3, 'dragend', endDrag);
		}
		if (polyType == "SHOP"){
                 coords1 = [     new google.maps.LatLng(41.7962165,12.2502375),  new google.maps.LatLng(41.7961935,12.2502576),   new google.maps.LatLng(41.7961785,12.2502872),  new google.maps.LatLng(41.796197,12.2503434),    new google.maps.LatLng(41.79624,12.2502991),     new google.maps.LatLng(41.796228,12.2502617),   new google.maps.LatLng(41.7962165,12.2502375),   ];

                var poly1 = new google.maps.Polygon({
                map: map,
                paths: coords1,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly1);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "ferrari-luxury-store";
                google.maps.event.addListener(poly1.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly1.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly1.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly1, 'dragstart', startDrag);
                google.maps.event.addListener(poly1, 'dragend', endDrag);

                coords2 = [     new google.maps.LatLng(41.7966016,12.2502882),  new google.maps.LatLng(41.7965756,12.2503197),   new google.maps.LatLng(41.7965816,12.2503532),  new google.maps.LatLng(41.7965961,12.2503847),   new google.maps.LatLng(41.7966136,12.2503961),   new google.maps.LatLng(41.7966371,12.2503693),  new google.maps.LatLng(41.7966016,12.2502882),   ];

                var poly2 = new google.maps.Polygon({
                map: map,
                paths: coords2,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly2);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "restaurant-ramen";
                google.maps.event.addListener(poly2.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly2.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly2.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly2, 'dragstart', startDrag);
                google.maps.event.addListener(poly2, 'dragend', endDrag);

                coords3 = [     new google.maps.LatLng(41.7962924,12.2504007),  new google.maps.LatLng(41.7962684,12.250439),    new google.maps.LatLng(41.7962654,12.2504718),  new google.maps.LatLng(41.7962799,12.2504859),   new google.maps.LatLng(41.7963004,12.2504953),   new google.maps.LatLng(41.7963059,12.250453),   new google.maps.LatLng(41.7963074,12.2504215),   new google.maps.LatLng(41.7962924,12.2504007),  ];

                var poly3 = new google.maps.Polygon({
                map: map,
                paths: coords3,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly3);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "montblanc-luxury-store";
                google.maps.event.addListener(poly3.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly3.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly3.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly3, 'dragstart', startDrag);
                google.maps.event.addListener(poly3, 'dragend', endDrag);

                coords4 = [     new google.maps.LatLng(41.7961415,12.2500397),  new google.maps.LatLng(41.796106,12.2500383),    new google.maps.LatLng(41.7961025,12.2501396),  new google.maps.LatLng(41.796134,12.2501684),    new google.maps.LatLng(41.7961555,12.2501094),   new google.maps.LatLng(41.7961415,12.2500397),  ];

                var poly4 = new google.maps.Polygon({
                map: map,
                paths: coords4,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly4);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "the-fashion-place-luxury-store";
                google.maps.event.addListener(poly4.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly4.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly4.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly4, 'dragstart', startDrag);
                google.maps.event.addListener(poly4, 'dragend', endDrag);

                coords5 = [     new google.maps.LatLng(41.7965949,12.2506559),  new google.maps.LatLng(41.7965694,12.2506753),   new google.maps.LatLng(41.7965584,12.2507095),  new google.maps.LatLng(41.7965749,12.2507444),   new google.maps.LatLng(41.7966019,12.2507323),   new google.maps.LatLng(41.7966099,12.2506995),  new google.maps.LatLng(41.7965949,12.2506559),   ];

                var poly5 = new google.maps.Polygon({
                map: map,
                paths: coords5,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly5);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "swaroski-luxury-store";
                google.maps.event.addListener(poly5.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly5.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly5.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly5, 'dragstart', startDrag);
                google.maps.event.addListener(poly5, 'dragend', endDrag);

                coords6 = [     new google.maps.LatLng(41.7959026,12.2497775),  new google.maps.LatLng(41.7958871,12.2497923),   new google.maps.LatLng(41.7958881,12.2498127),  new google.maps.LatLng(41.7958956,12.2498325),   new google.maps.LatLng(41.7959086,12.2498298),   new google.maps.LatLng(41.7959138,12.2498067),  new google.maps.LatLng(41.7959026,12.2497775),   ];

                var poly6 = new google.maps.Polygon({
                map: map,
                paths: coords6,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly6);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "benetton-store";
                google.maps.event.addListener(poly6.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly6.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly6.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly6, 'dragstart', startDrag);
                google.maps.event.addListener(poly6, 'dragend', endDrag);

                coords7 = [     new google.maps.LatLng(41.7958455,12.2496105),  new google.maps.LatLng(41.7958235,12.2496219),   new google.maps.LatLng(41.7958253,12.2496592),  new google.maps.LatLng(41.7958398,12.249681),    new google.maps.LatLng(41.7958523,12.2496488),   new google.maps.LatLng(41.7958455,12.2496105),  ];

                var poly7 = new google.maps.Polygon({
                map: map,
                paths: coords7,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly7);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "dolce-gabbana-store";
                google.maps.event.addListener(poly7.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly7.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly7.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly7, 'dragstart', startDrag);
                google.maps.event.addListener(poly7, 'dragend', endDrag);

                coords8 = [     new google.maps.LatLng(41.7958653,12.2497165),  new google.maps.LatLng(41.7958513,12.2497142),   new google.maps.LatLng(41.7958446,12.2497433),  new google.maps.LatLng(41.7958443,12.2497725),   new google.maps.LatLng(41.7958563,12.2497806),   new google.maps.LatLng(41.7958653,12.2497836),  new google.maps.LatLng(41.7958653,12.2497547),   new google.maps.LatLng(41.7958653,12.2497165),  ];

                var poly8 = new google.maps.Polygon({
                map: map,
                paths: coords8,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly8);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "salvatore-ferragamo-store";
                google.maps.event.addListener(poly8.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly8.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly8.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly8, 'dragstart', startDrag);
                google.maps.event.addListener(poly8, 'dragend', endDrag);

                coords9 = [     new google.maps.LatLng(41.7956514,12.2492427),  new google.maps.LatLng(41.7956344,12.2492649),   new google.maps.LatLng(41.7956414,12.2493018),  new google.maps.LatLng(41.7956559,12.2493024),   new google.maps.LatLng(41.7956701,12.2492914),   new google.maps.LatLng(41.7956659,12.2492632),  new google.maps.LatLng(41.7956514,12.2492427),   ];

                var poly9 = new google.maps.Polygon({
                map: map,
                paths: coords9,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly9);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "diesel-luxury-store";
                google.maps.event.addListener(poly9.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly9.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly9.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly9, 'dragstart', startDrag);
                google.maps.event.addListener(poly9, 'dragend', endDrag);

                coords10 = [    new google.maps.LatLng(41.7961482,12.2494944),  new google.maps.LatLng(41.7961022,12.2495473),   new google.maps.LatLng(41.7961287,12.249597),   new google.maps.LatLng(41.7961532,12.2496265),   new google.maps.LatLng(41.7961787,12.2495835),   new google.maps.LatLng(41.7961482,12.2494944),  ];

                var poly10 = new google.maps.Polygon({
                map: map,
                paths: coords10,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly10);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "bulgari-luxury-store";
                google.maps.event.addListener(poly10.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly10.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly10.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly10, 'dragstart', startDrag);
                google.maps.event.addListener(poly10, 'dragend', endDrag);

                coords11 = [    new google.maps.LatLng(41.7956986,12.2493061),  new google.maps.LatLng(41.7956834,12.2493333),   new google.maps.LatLng(41.7956831,12.2493634),  new google.maps.LatLng(41.7957071,12.2493641),   new google.maps.LatLng(41.7957179,12.249342),    new google.maps.LatLng(41.7957081,12.2493121),  new google.maps.LatLng(41.7956986,12.2493061),   ];

                var poly11 = new google.maps.Polygon({
                map: map,
                paths: coords11,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly11);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "pandora-luxury-store";
                google.maps.event.addListener(poly11.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly11.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly11.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly11, 'dragstart', startDrag);
                google.maps.event.addListener(poly11, 'dragend', endDrag);

                coords12 = [    new google.maps.LatLng(41.7959262,12.2490287),  new google.maps.LatLng(41.7959007,12.2490495),   new google.maps.LatLng(41.7959137,12.2490937),  new google.maps.LatLng(41.7959407,12.2491179),   new google.maps.LatLng(41.7959617,12.2490957),   new google.maps.LatLng(41.7959262,12.2490287),  ];

                var poly12 = new google.maps.Polygon({
                map: map,
                paths: coords12,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly12);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "caffe-kimbo-restaurant";
                google.maps.event.addListener(poly12.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly12.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly12.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly12, 'dragstart', startDrag);
                google.maps.event.addListener(poly12, 'dragend', endDrag);

                coords13 = [    new google.maps.LatLng(41.7964449,12.249987),   new google.maps.LatLng(41.796415,12.2500279),    new google.maps.LatLng(41.7964384,12.2500755),  new google.maps.LatLng(41.7964539,12.2500942),   new google.maps.LatLng(41.7964859,12.2500674),   new google.maps.LatLng(41.7964449,12.249987),   ];

                var poly13 = new google.maps.Polygon({
                map: map,
                paths: coords13,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly13);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "farinella-restaurant";
                google.maps.event.addListener(poly13.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly13.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly13.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly13, 'dragstart', startDrag);
                google.maps.event.addListener(poly13, 'dragend', endDrag);

                coords14 = [    new google.maps.LatLng(41.7961359,12.2543385),  new google.maps.LatLng(41.7960979,12.2542902),   new google.maps.LatLng(41.7960669,12.2543733),  new google.maps.LatLng(41.7960589,12.2544095),   new google.maps.LatLng(41.7960949,12.2544645),   new google.maps.LatLng(41.7961269,12.2544471),  new google.maps.LatLng(41.7961359,12.2543385),   ];

                var poly14 = new google.maps.Polygon({
                map: map,
                paths: coords14,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly14);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "alemagna-restaurant";
                google.maps.event.addListener(poly14.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly14.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly14.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly14, 'dragstart', startDrag);
                google.maps.event.addListener(poly14, 'dragend', endDrag);

                coords15 = [    new google.maps.LatLng(41.7965004,12.2533954),  new google.maps.LatLng(41.7964622,12.2534769),   new google.maps.LatLng(41.7964899,12.2534966),  new google.maps.LatLng(41.7965264,12.2534162),   new google.maps.LatLng(41.7965004,12.2533954),   ];

                var poly15 = new google.maps.Polygon({
                map: map,
                paths: coords15,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly15);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "borsalino-luxury-store";
                google.maps.event.addListener(poly15.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly15.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly15.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly15, 'dragstart', startDrag);
                google.maps.event.addListener(poly15, 'dragend', endDrag);

                coords16 = [    new google.maps.LatLng(41.7961032,12.2546),     new google.maps.LatLng(41.7960807,12.2545839),   new google.maps.LatLng(41.7960677,12.2546288),  new google.maps.LatLng(41.7960737,12.2546791),   new google.maps.LatLng(41.7961017,12.2546731),   new google.maps.LatLng(41.7961082,12.2546489),  new google.maps.LatLng(41.7961032,12.2546),      ];

                var poly16 = new google.maps.Polygon({
                map: map,
                paths: coords16,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly16);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "tim-electronics-shop";
                google.maps.event.addListener(poly16.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly16.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly16.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly16, 'dragstart', startDrag);
                google.maps.event.addListener(poly16, 'dragend', endDrag);

                coords17 = [    new google.maps.LatLng(41.7960497,12.2544391),  new google.maps.LatLng(41.7959957,12.2544149),   new google.maps.LatLng(41.7959842,12.2545061),  new google.maps.LatLng(41.7960067,12.2545624),   new google.maps.LatLng(41.7960347,12.2545738),   new google.maps.LatLng(41.7960567,12.2545484),  new google.maps.LatLng(41.7960497,12.2544391),   ];

                var poly17 = new google.maps.Polygon({
                map: map,
                paths: coords17,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly17);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "gallo-luxury-store";
                google.maps.event.addListener(poly17.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly17.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly17.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly17, 'dragstart', startDrag);
                google.maps.event.addListener(poly17, 'dragend', endDrag);

                coords18 = [    new google.maps.LatLng(41.7958207,12.255032),   new google.maps.LatLng(41.7957892,12.2550045),   new google.maps.LatLng(41.7957582,12.2550682),  new google.maps.LatLng(41.7957887,12.2551138),   new google.maps.LatLng(41.7958172,12.2550548),   new google.maps.LatLng(41.7958207,12.255032),   ];

                var poly18 = new google.maps.Polygon({
                map: map,
                paths: coords18,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly18);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "sophia-loren-restaurant";
                google.maps.event.addListener(poly18.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly18.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly18.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly18, 'dragstart', startDrag);
                google.maps.event.addListener(poly18, 'dragend', endDrag);

                coords19 = [    new google.maps.LatLng(41.7963171,12.2545652),  new google.maps.LatLng(41.7962169,12.2544725),   new google.maps.LatLng(41.7962019,12.2545081),  new google.maps.LatLng(41.7961769,12.2545718),   new google.maps.LatLng(41.7962799,12.2546227),   new google.maps.LatLng(41.7963171,12.2545652),  ];

                var poly19 = new google.maps.Polygon({
                map: map,
                paths: coords19,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly19);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "venchi-restaurant";
                google.maps.event.addListener(poly19.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly19.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly19.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly19, 'dragstart', startDrag);
                google.maps.event.addListener(poly19, 'dragend', endDrag);

                coords20 = [    new google.maps.LatLng(41.7964427,12.2529515),  new google.maps.LatLng(41.7964072,12.2529287),   new google.maps.LatLng(41.7963832,12.253044),   new google.maps.LatLng(41.7964177,12.2530896),   new google.maps.LatLng(41.7964427,12.2530675),   new google.maps.LatLng(41.7964492,12.2529864),  new google.maps.LatLng(41.7964427,12.2529515),   ];

                var poly20 = new google.maps.Polygon({
                map: map,
                paths: coords20,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly20);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "polo-ralph-lauren-luxury-store";
                google.maps.event.addListener(poly20.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly20.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly20.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly20, 'dragstart', startDrag);
                google.maps.event.addListener(poly20, 'dragend', endDrag);

                coords21 = [    new google.maps.LatLng(41.7958587,12.2533501),  new google.maps.LatLng(41.7958342,12.25333),     new google.maps.LatLng(41.7958207,12.2533662),  new google.maps.LatLng(41.7958087,12.2534226),   new google.maps.LatLng(41.7958412,12.2534433),   new google.maps.LatLng(41.7958622,12.2534407),  new google.maps.LatLng(41.7958697,12.2533723),   new google.maps.LatLng(41.7958587,12.2533501),  ];

                var poly21 = new google.maps.Polygon({
                map: map,
                paths: coords21,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly21);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "casa-del-gusto-restaurant";
                google.maps.event.addListener(poly21.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly21.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly21.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly21, 'dragstart', startDrag);
                google.maps.event.addListener(poly21, 'dragend', endDrag);

                coords22 = [    new google.maps.LatLng(41.7959772,12.2552787),  new google.maps.LatLng(41.7959022,12.2552177),   new google.maps.LatLng(41.7958682,12.2552922),  new google.maps.LatLng(41.7959427,12.2553532),   new google.maps.LatLng(41.7959772,12.2552787),   ];

                var poly22 = new google.maps.Polygon({
                map: map,
                paths: coords22,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly22);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "just-design-store";
                google.maps.event.addListener(poly22.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly22.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly22.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly22, 'dragstart', startDrag);
                google.maps.event.addListener(poly22, 'dragend', endDrag);

                coords23 = [    new google.maps.LatLng(41.7960132,12.255203),   new google.maps.LatLng(41.7959352,12.2551413),   new google.maps.LatLng(41.7959022,12.2552177),  new google.maps.LatLng(41.7959772,12.2552787),   new google.maps.LatLng(41.7960132,12.255203),    ];

                var poly23 = new google.maps.Polygon({
                map: map,
                paths: coords23,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly23);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "fabriano-store";
                google.maps.event.addListener(poly23.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly23.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly23.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly23, 'dragstart', startDrag);
                google.maps.event.addListener(poly23, 'dragend', endDrag);

                coords24 = [    new google.maps.LatLng(41.7956514,12.2560915),  new google.maps.LatLng(41.7955879,12.2560412),   new google.maps.LatLng(41.7955584,12.2561035),  new google.maps.LatLng(41.7956309,12.2561605),   new google.maps.LatLng(41.7956514,12.2560915),   ];

                var poly24 = new google.maps.Polygon({
                map: map,
                paths: coords24,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly24);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "ottica-vasari-store";
                google.maps.event.addListener(poly24.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly24.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly24.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly24, 'dragstart', startDrag);
                google.maps.event.addListener(poly24, 'dragend', endDrag);

                coords25 = [    new google.maps.LatLng(41.7956151,12.2562343),  new google.maps.LatLng(41.7955277,12.2561625),   new google.maps.LatLng(41.7955012,12.2562256),  new google.maps.LatLng(41.7955907,12.2563027),   new google.maps.LatLng(41.7956151,12.2562343),   ];

                var poly25 = new google.maps.Polygon({
                map: map,
                paths: coords25,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly25);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "boggi-store";
                google.maps.event.addListener(poly25.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly25.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly25.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly25, 'dragstart', startDrag);
                google.maps.event.addListener(poly25, 'dragend', endDrag);

                coords26 = [    new google.maps.LatLng(41.7952493,12.2564765),  new google.maps.LatLng(41.7952133,12.2563518),   new google.maps.LatLng(41.7951968,12.2563344),  new google.maps.LatLng(41.7951628,12.2563471),   new google.maps.LatLng(41.7951343,12.2564477),   new google.maps.LatLng(41.7951413,12.2566207),  new google.maps.LatLng(41.7952028,12.2566509),   new google.maps.LatLng(41.7952413,12.2565691),  new google.maps.LatLng(41.7952493,12.2564765),   ];

                var poly26 = new google.maps.Polygon({
                map: map,
                paths: coords26,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly26);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "kfc-restaurant";
                google.maps.event.addListener(poly26.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly26.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly26.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly26, 'dragstart', startDrag);
                google.maps.event.addListener(poly26, 'dragend', endDrag);

                coords27 = [    new google.maps.LatLng(41.7964619,12.2588004),  new google.maps.LatLng(41.7964009,12.2587226),   new google.maps.LatLng(41.7963469,12.2586904),  new google.maps.LatLng(41.7962899,12.2586904),   new google.maps.LatLng(41.7962739,12.2587226),   new google.maps.LatLng(41.7963159,12.2587843),  new google.maps.LatLng(41.7963639,12.2588205),   new google.maps.LatLng(41.7964109,12.2588379),  new google.maps.LatLng(41.7964569,12.2588366),   new google.maps.LatLng(41.7964619,12.2588004),  ];

                var poly27 = new google.maps.Polygon({
                map: map,
                paths: coords27,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly27);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "relay-retail-shop";
                google.maps.event.addListener(poly27.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly27.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly27.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly27, 'dragstart', startDrag);
                google.maps.event.addListener(poly27, 'dragend', endDrag);

                coords28 = [    new google.maps.LatLng(41.7954452,12.257113),   new google.maps.LatLng(41.7953392,12.25707),     new google.maps.LatLng(41.7952883,12.2571894),  new google.maps.LatLng(41.7953023,12.2572672),   new google.maps.LatLng(41.7953722,12.2573235),   new google.maps.LatLng(41.7954192,12.2571961),  new google.maps.LatLng(41.7954452,12.257113),    ];

                var poly28 = new google.maps.Polygon({
                map: map,
                paths: coords28,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly28);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "berlucci-franciacorta-restaurant";
                google.maps.event.addListener(poly28.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly28.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly28.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly28, 'dragstart', startDrag);
                google.maps.event.addListener(poly28, 'dragend', endDrag);

                coords29 = [    new google.maps.LatLng(41.7961106,12.25855),    new google.maps.LatLng(41.7960481,12.2585151),   new google.maps.LatLng(41.7960236,12.2585855),  new google.maps.LatLng(41.7960851,12.258627),    new google.maps.LatLng(41.7961106,12.25855),     ];

                var poly29 = new google.maps.Polygon({
                map: map,
                paths: coords29,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly29);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "deli-scia-restaurant";
                google.maps.event.addListener(poly29.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly29.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly29.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly29, 'dragstart', startDrag);
                google.maps.event.addListener(poly29, 'dragend', endDrag);

                coords30 = [    new google.maps.LatLng(41.7969387,12.2475184),  new google.maps.LatLng(41.7968822,12.247562),    new google.maps.LatLng(41.7969097,12.2476491),  new google.maps.LatLng(41.7969552,12.2476263),   new google.maps.LatLng(41.7969387,12.2475184),   ];

                var poly30 = new google.maps.Polygon({
                map: map,
                paths: coords30,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly30);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "temakinho-restaurant";
                google.maps.event.addListener(poly30.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly30.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly30.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly30, 'dragstart', startDrag);
                google.maps.event.addListener(poly30, 'dragend', endDrag);

                coords31 = [    new google.maps.LatLng(41.7965771,12.2472946),  new google.maps.LatLng(41.7963751,12.2473925),   new google.maps.LatLng(41.7963861,12.2474743),  new google.maps.LatLng(41.7964201,12.2474837),   new google.maps.LatLng(41.7964761,12.2474193),   new google.maps.LatLng(41.7965351,12.2473965),  new google.maps.LatLng(41.7965851,12.2474073),   new google.maps.LatLng(41.7966101,12.2473764),  new google.maps.LatLng(41.7965771,12.2472946),   ];

                var poly31 = new google.maps.Polygon({
                map: map,
                paths: coords31,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly31);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "caffe-vergnano-restaurant";
                google.maps.event.addListener(poly31.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly31.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly31.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly31, 'dragstart', startDrag);
                google.maps.event.addListener(poly31, 'dragend', endDrag);

                coords32 = [    new google.maps.LatLng(41.7960471,12.2479691),  new google.maps.LatLng(41.7960161,12.2479852),   new google.maps.LatLng(41.7960341,12.2480684),  new google.maps.LatLng(41.7960671,12.2480496),   new google.maps.LatLng(41.7960471,12.2479691),   ];

                var poly32 = new google.maps.Polygon({
                map: map,
                paths: coords32,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly32);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "borsalino-luxury-shop";
                google.maps.event.addListener(poly32.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly32.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly32.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly32, 'dragstart', startDrag);
                google.maps.event.addListener(poly32, 'dragend', endDrag);

                coords33 = [    new google.maps.LatLng(41.7973401,12.2468264),  new google.maps.LatLng(41.7972416,12.2468713),   new google.maps.LatLng(41.7972636,12.2469457),  new google.maps.LatLng(41.7973581,12.2468954),   new google.maps.LatLng(41.7973401,12.2468264),   ];

                var poly33 = new google.maps.Polygon({
                map: map,
                paths: coords33,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly33);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "illy-caffe-restaurant";
                google.maps.event.addListener(poly33.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly33.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly33.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly33, 'dragstart', startDrag);
                google.maps.event.addListener(poly33, 'dragend', endDrag);

                coords34 = [    new google.maps.LatLng(41.7974876,12.2472508),  new google.maps.LatLng(41.7974686,12.2472025),   new google.maps.LatLng(41.7974396,12.2471958),  new google.maps.LatLng(41.7974076,12.2472253),   new google.maps.LatLng(41.7973926,12.2472884),   new google.maps.LatLng(41.7974196,12.2472897),  new google.maps.LatLng(41.7974876,12.2472508),   ];

                var poly34 = new google.maps.Polygon({
                map: map,
                paths: coords34,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly34);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "relay-retail-shop";
                google.maps.event.addListener(poly34.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly34.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly34.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly34, 'dragstart', startDrag);
                google.maps.event.addListener(poly34, 'dragend', endDrag);

                coords35 = [    new google.maps.LatLng(41.7962397,12.2414009),  new google.maps.LatLng(41.7962127,12.2413942),   new google.maps.LatLng(41.7961737,12.2414143),  new google.maps.LatLng(41.7961707,12.2414988),   new google.maps.LatLng(41.7962446,12.2415296),   new google.maps.LatLng(41.7962946,12.2414988),  new google.maps.LatLng(41.7962397,12.2414009),   ];

                var poly35 = new google.maps.Polygon({
                map: map,
                paths: coords35,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly35);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "motta-restaurant";
                google.maps.event.addListener(poly35.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly35.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly35.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly35, 'dragstart', startDrag);
                google.maps.event.addListener(poly35, 'dragend', endDrag);

                coords36 = [    new google.maps.LatLng(41.7958767,12.2418876),  new google.maps.LatLng(41.7957947,12.2418225),   new google.maps.LatLng(41.7957662,12.241899),   new google.maps.LatLng(41.7957957,12.2419473),   new google.maps.LatLng(41.7958372,12.2419734),   new google.maps.LatLng(41.7958767,12.2418876),  ];

                var poly36 = new google.maps.Polygon({
                map: map,
                paths: coords36,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly36);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "wine-food-restaurant";
                google.maps.event.addListener(poly36.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly36.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly36.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly36, 'dragstart', startDrag);
                google.maps.event.addListener(poly36, 'dragend', endDrag);

                coords37 = [    new google.maps.LatLng(41.7946828,12.2480859),  new google.maps.LatLng(41.7946398,12.2481047),   new google.maps.LatLng(41.7946888,12.2483796),  new google.maps.LatLng(41.7947778,12.2483045),   new google.maps.LatLng(41.7946828,12.2480859),   ];

                var poly37 = new google.maps.Polygon({
                map: map,
                paths: coords37,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly37);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "alea-duty-free-retail-shop";
                google.maps.event.addListener(poly37.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly37.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly37.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly37, 'dragstart', startDrag);
                google.maps.event.addListener(poly37, 'dragend', endDrag);

                coords38 = [    new google.maps.LatLng(41.7952504,12.2497116),  new google.maps.LatLng(41.7952,12.2497606),      new google.maps.LatLng(41.7952644,12.2498625),  new google.maps.LatLng(41.7952989,12.2498122),   new google.maps.LatLng(41.7952504,12.2497116),   ];

                var poly38 = new google.maps.Polygon({
                map: map,
                paths: coords38,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly38);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "swatch-retail-shop";
                google.maps.event.addListener(poly38.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly38.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly38.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly38, 'dragstart', startDrag);
                google.maps.event.addListener(poly38, 'dragend', endDrag);

                coords39 = [    new google.maps.LatLng(41.7947368,12.2494283),  new google.maps.LatLng(41.7947013,12.2494639),   new google.maps.LatLng(41.7947503,12.2495685),  new google.maps.LatLng(41.7947853,12.2495282),   new google.maps.LatLng(41.7947368,12.2494283),   ];

                var poly39 = new google.maps.Polygon({
                map: map,
                paths: coords39,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly39);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "cioccolatini-italiani-retail-shop";
                google.maps.event.addListener(poly39.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly39.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly39.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly39, 'dragstart', startDrag);
                google.maps.event.addListener(poly39, 'dragend', endDrag);

                coords40 = [    new google.maps.LatLng(41.7959811,12.2513823),  new google.maps.LatLng(41.7959291,12.2514185),   new google.maps.LatLng(41.7959616,12.251507),   new google.maps.LatLng(41.7959956,12.2514681),   new google.maps.LatLng(41.7959811,12.2513823),   ];

                var poly40 = new google.maps.Polygon({
                map: map,
                paths: coords40,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly40);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "palma-rome-restaurant";
                google.maps.event.addListener(poly40.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly40.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly40.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly40, 'dragstart', startDrag);
                google.maps.event.addListener(poly40, 'dragend', endDrag);

                coords41 = [    new google.maps.LatLng(41.7954834,12.2514605),  new google.maps.LatLng(41.7954134,12.2515315),   new google.maps.LatLng(41.7954874,12.2516791),  new google.maps.LatLng(41.7955504,12.2515852),   new google.maps.LatLng(41.7954834,12.2514605),   ];

                var poly41 = new google.maps.Polygon({
                map: map,
                paths: coords41,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly41);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "natoo-restaurant";
                google.maps.event.addListener(poly41.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly41.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly41.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly41, 'dragstart', startDrag);
                google.maps.event.addListener(poly41, 'dragend', endDrag);

                coords42 = [    new google.maps.LatLng(41.7958468,12.2516277),  new google.maps.LatLng(41.7958149,12.2516659),   new google.maps.LatLng(41.7958194,12.2517189),  new google.maps.LatLng(41.7958443,12.251747),    new google.maps.LatLng(41.7958638,12.2517195),   new google.maps.LatLng(41.7958468,12.2516277),  ];

                var poly42 = new google.maps.Polygon({
                map: map,
                paths: coords42,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly42);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "caffe-napoli-restaurant";
                google.maps.event.addListener(poly42.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly42.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly42.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly42, 'dragstart', startDrag);
                google.maps.event.addListener(poly42, 'dragend', endDrag);

                coords43 = [    new google.maps.LatLng(41.7960773,12.2519489),  new google.maps.LatLng(41.7958383,12.2520562),   new google.maps.LatLng(41.7958693,12.2521594),  new google.maps.LatLng(41.7960993,12.2520575),   new google.maps.LatLng(41.7960773,12.2519489),   ];

                var poly43 = new google.maps.Polygon({
                map: map,
                paths: coords43,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly43);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "feltrinelli-retail-shop";
                google.maps.event.addListener(poly43.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly43.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly43.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly43, 'dragstart', startDrag);
                google.maps.event.addListener(poly43, 'dragend', endDrag);

                coords44 = [    new google.maps.LatLng(41.7978726,12.2560271),  new google.maps.LatLng(41.7978336,12.2560083),   new google.maps.LatLng(41.7978121,12.2560928),  new google.maps.LatLng(41.7978521,12.256127),    new google.maps.LatLng(41.7978771,12.2560667),   new google.maps.LatLng(41.7978726,12.2560271),  ];

                var poly44 = new google.maps.Polygon({
                map: map,
                paths: coords44,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly44);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "gusto restaurant";
                google.maps.event.addListener(poly44.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly44.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly44.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly44, 'dragstart', startDrag);
                google.maps.event.addListener(poly44, 'dragend', endDrag);

                coords45 = [    new google.maps.LatLng(41.797997,12.2559929),   new google.maps.LatLng(41.7979066,12.2559332),   new google.maps.LatLng(41.7978671,12.2560566),  new google.maps.LatLng(41.7979365,12.2561015),   new google.maps.LatLng(41.797997,12.2559929),    ];

                var poly45 = new google.maps.Polygon({
                map: map,
                paths: coords45,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly45);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "natoo-restaurant";
                google.maps.event.addListener(poly45.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly45.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly45.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly45, 'dragstart', startDrag);
                google.maps.event.addListener(poly45, 'dragend', endDrag);

                coords46 = [    new google.maps.LatLng(41.7967156,12.2549785),  new google.maps.LatLng(41.7966147,12.2549477),   new google.maps.LatLng(41.7965777,12.2550322),  new google.maps.LatLng(41.7966608,12.2551069),   new google.maps.LatLng(41.7967156,12.2549785),   ];

                var poly46 = new google.maps.Polygon({
                map: map,
                paths: coords46,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly46);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "rinaldini-restaurant";
                google.maps.event.addListener(poly46.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly46.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly46.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly46, 'dragstart', startDrag);
                google.maps.event.addListener(poly46, 'dragend', endDrag);

                coords47 = [    new google.maps.LatLng(41.7981474,12.2521831),  new google.maps.LatLng(41.7979735,12.2520758),   new google.maps.LatLng(41.7978875,12.2523145),  new google.maps.LatLng(41.7980034,12.2524674),   new google.maps.LatLng(41.7981194,12.2524701),   new google.maps.LatLng(41.7981474,12.2521831),  ];

                var poly47 = new google.maps.Polygon({
                map: map,
                paths: coords47,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly47);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "antica-focacceria-restaurant";
                google.maps.event.addListener(poly47.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly47.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly47.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly47, 'dragstart', startDrag);
                google.maps.event.addListener(poly47, 'dragend', endDrag);

                coords48 = [    new google.maps.LatLng(41.7973007,12.2553833),  new google.maps.LatLng(41.7972567,12.2555227),   new google.maps.LatLng(41.7973937,12.2556045),  new google.maps.LatLng(41.7974367,12.2554664),   new google.maps.LatLng(41.7973007,12.2553833),   ];

                var poly48 = new google.maps.Polygon({
                map: map,
                paths: coords48,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly48);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "culto-caffe-restaurant";
                google.maps.event.addListener(poly48.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly48.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly48.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly48, 'dragstart', startDrag);
                google.maps.event.addListener(poly48, 'dragend', endDrag);

                coords49 = [    new google.maps.LatLng(41.7991232,12.25291),    new google.maps.LatLng(41.7989612,12.2528483),   new google.maps.LatLng(41.7989153,12.2530039),  new google.maps.LatLng(41.799001,12.2531511),    new google.maps.LatLng(41.7990952,12.253189),    new google.maps.LatLng(41.7991232,12.25291),    ];

                var poly49 = new google.maps.Polygon({
                map: map,
                paths: coords49,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly49);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "moka-caffe-restaurant";
                google.maps.event.addListener(poly49.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly49.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly49.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly49, 'dragstart', startDrag);
                google.maps.event.addListener(poly49, 'dragend', endDrag);

                coords50 = [    new google.maps.LatLng(41.79518,12.2499664),    new google.maps.LatLng(41.7951445,12.2499993),   new google.maps.LatLng(41.795171,12.2500704),   new google.maps.LatLng(41.7952025,12.2500395),   new google.maps.LatLng(41.79518,12.2499664),     ];

                var poly50 = new google.maps.Polygon({
                map: map,
                paths: coords50,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly50);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "louis-vitton-luxury-shop";
                google.maps.event.addListener(poly50.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly50.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly50.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly50, 'dragstart', startDrag);
                google.maps.event.addListener(poly50, 'dragend', endDrag);

                coords51 = [    new google.maps.LatLng(41.7951219,12.2488872),  new google.maps.LatLng(41.7949619,12.2490146),   new google.maps.LatLng(41.7951149,12.2492788),  new google.maps.LatLng(41.7952269,12.2491729),   new google.maps.LatLng(41.7951899,12.2490817),   new google.maps.LatLng(41.7952919,12.2489797),  new google.maps.LatLng(41.7952639,12.2489234),   new google.maps.LatLng(41.7952349,12.2489315),  new google.maps.LatLng(41.7951219,12.2488872),   ];

                var poly51 = new google.maps.Polygon({
                map: map,
                paths: coords51,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly51);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "autogrill-restaurant";
                google.maps.event.addListener(poly51.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly51.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly51.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly51, 'dragstart', startDrag);
                google.maps.event.addListener(poly51, 'dragend', endDrag);

                coords52 = [    new google.maps.LatLng(41.7956934,12.2582348),  new google.maps.LatLng(41.7956154,12.2581932),   new google.maps.LatLng(41.7955764,12.2583287),  new google.maps.LatLng(41.7956744,12.2583769),   new google.maps.LatLng(41.7956934,12.2582348),   ];

                var poly52 = new google.maps.Polygon({
                map: map,
                paths: coords52,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly52);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "panella-restaurant";
                google.maps.event.addListener(poly52.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly52.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly52.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly52, 'dragstart', startDrag);
                google.maps.event.addListener(poly52, 'dragend', endDrag);

                coords53 = [    new google.maps.LatLng(41.7964472,12.2536766),  new google.maps.LatLng(41.7964013,12.2536377),   new google.maps.LatLng(41.7963783,12.2536712),  new google.maps.LatLng(41.7963783,12.2537799),   new google.maps.LatLng(41.7963753,12.253863),    new google.maps.LatLng(41.7964083,12.2538724),  new google.maps.LatLng(41.7964372,12.2538335),   new google.maps.LatLng(41.7964472,12.2536766),  ];

                var poly53 = new google.maps.Polygon({
                map: map,
                paths: coords53,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly53);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "bottega-veneta-luxury-store";
                google.maps.event.addListener(poly53.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly53.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly53.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly53, 'dragstart', startDrag);
                google.maps.event.addListener(poly53, 'dragend', endDrag);

                coords54 = [    new google.maps.LatLng(41.7957288,12.2493462),  new google.maps.LatLng(41.7957115,12.2493801),   new google.maps.LatLng(41.795722,12.2494079),   new google.maps.LatLng(41.795736,12.2494129),    new google.maps.LatLng(41.795747,12.2493834),    new google.maps.LatLng(41.7957443,12.249371),   new google.maps.LatLng(41.7957288,12.2493462),   ];

                var poly54 = new google.maps.Polygon({
                map: map,
                paths: coords54,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly54);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "burberry-luxury-store";
                google.maps.event.addListener(poly54.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly54.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly54.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly54, 'dragstart', startDrag);
                google.maps.event.addListener(poly54, 'dragend', endDrag);

                coords55 = [    new google.maps.LatLng(41.7963505,12.2500428),  new google.maps.LatLng(41.7963322,12.2500569),   new google.maps.LatLng(41.7963167,12.2500773),  new google.maps.LatLng(41.796335,12.2501095),    new google.maps.LatLng(41.796349,12.2501196),    new google.maps.LatLng(41.796362,12.2501008),   new google.maps.LatLng(41.7963665,12.2500797),   new google.maps.LatLng(41.7963505,12.2500428),  ];

                var poly55 = new google.maps.Polygon({
                map: map,
                paths: coords55,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly55);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "damiani-luxury-store";
                google.maps.event.addListener(poly55.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly55.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly55.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly55, 'dragstart', startDrag);
                google.maps.event.addListener(poly55, 'dragend', endDrag);

                coords56 = [    new google.maps.LatLng(41.7963565,12.2499124),  new google.maps.LatLng(41.7963535,12.2498802),   new google.maps.LatLng(41.796339,12.2498426),   new google.maps.LatLng(41.7962995,12.2498628),   new google.maps.LatLng(41.7962725,12.249909),    new google.maps.LatLng(41.7962685,12.2499633),  new google.maps.LatLng(41.796304,12.249962),     new google.maps.LatLng(41.796338,12.249966),    new google.maps.LatLng(41.7963565,12.2499124),   ];

                var poly56 = new google.maps.Polygon({
                map: map,
                paths: coords56,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly56);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "fendi-luxury-store";
                google.maps.event.addListener(poly56.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly56.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly56.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly56, 'dragstart', startDrag);
                google.maps.event.addListener(poly56, 'dragend', endDrag);		
		}	
		if (polyType == "TAXIING"){
                coords1 = [     new google.maps.LatLng(41.8008544,12.2500846),  new google.maps.LatLng(41.8006704,12.2509751),   new google.maps.LatLng(41.8010383,12.2522303),  new google.maps.LatLng(41.8009344,12.2527239),   new google.maps.LatLng(41.8012063,12.2528955),   new google.maps.LatLng(41.8010383,12.2534105),  new google.maps.LatLng(41.8012863,12.2536251),   new google.maps.LatLng(41.8011743,12.2540543),  new google.maps.LatLng(41.8013663,12.2545907),   new google.maps.LatLng(41.8015582,12.254934),   new google.maps.LatLng(41.8019181,12.2545478),   new google.maps.LatLng(41.8008544,12.2500846),  ];

                var poly1 = new google.maps.Polygon({
                map: map,
                paths: coords1,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly1);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "plane-taxi-area2";
                google.maps.event.addListener(poly1.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly1.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly1.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly1, 'dragstart', startDrag);
                google.maps.event.addListener(poly1, 'dragend', endDrag);

                coords2 = [     new google.maps.LatLng(41.7987193,12.241845),   new google.maps.LatLng(41.7984234,12.2421186),   new google.maps.LatLng(41.798495,12.2424115),   new google.maps.LatLng(41.7986433,12.2429501),   new google.maps.LatLng(41.7988513,12.2431486),   new google.maps.LatLng(41.7991952,12.2429447),  new google.maps.LatLng(41.7987193,12.241845),    ];

                var poly2 = new google.maps.Polygon({
                map: map,
                paths: coords2,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly2);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "plane-taxi-area1";
                google.maps.event.addListener(poly2.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly2.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly2.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly2, 'dragstart', startDrag);
                google.maps.event.addListener(poly2, 'dragend', endDrag);

                coords3 = [     new google.maps.LatLng(41.8051054,12.2694743),  new google.maps.LatLng(41.8043377,12.2698069),   new google.maps.LatLng(41.8049775,12.2722316),  new google.maps.LatLng(41.8054333,12.2719848),   new google.maps.LatLng(41.8049295,12.2700107),   new google.maps.LatLng(41.8052574,12.269882),   new google.maps.LatLng(41.8051054,12.2694743),   ];

                var poly3 = new google.maps.Polygon({
                map: map,
                paths: coords3,
                strokeColor: shapeColor,
                strokeOpacity: 0.7,
                strokeWeight: 3,
                fillColor: shapeColor,
                fillOpacity: 0,//0.025,
                visible: true,
                draggable: true,
                clickable: true,
                editable: true,
                geodesic: false,
                zIndex: 200000,
                });
                searchShapes["poly"].push(poly3);
                totalSearchShapes++;
                SearchShapesNames[totalSearchShapes] = "plane-taxi-area3";
                google.maps.event.addListener(poly3.getPath(), 'set_at', updateSearch);
                google.maps.event.addListener(poly3.getPath(), 'insert_at', updateSearch);
                google.maps.event.addListener(poly3.getPath(), 'remove_at', updateSearch);
                google.maps.event.addListener(poly3, 'dragstart', startDrag);
                google.maps.event.addListener(poly3, 'dragend', endDrag);

		}
		
    }