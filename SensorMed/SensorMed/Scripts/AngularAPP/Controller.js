var app = angular.module('app', ['nvd3ChartDirectives']);

// Todos os metodos relacionados a relatorios


app.controller('ExampleCtrl', ['$scope', ExampleCtrl]);

function ExampleCtrl($scope){
    $scope.exampleData = [
                {
                    "key": "Series 1",
                    "values": [[1025409600000, 0], [1028088000000, -6.3382185140371], [1030766400000, -5.9507873460847], [1033358400000, -11.569146943813], [1036040400000, -5.4767332317425], [1038632400000, 0.50794682203014], [1041310800000, -5.5310285460542], [1043989200000, -5.7838296963382], [1046408400000, -7.3249341615649], [1049086800000, -6.7078630712489], [1051675200000, 0.44227126150934], [1054353600000, 7.2481659343222], [1056945600000, 9.2512381306992], [1059624000000, 11.341210982529], [1062302400000, 14.734820409020], [1064894400000, 12.387148007542], [1067576400000, 18.436471461827], [1070168400000, 19.830742266977], [1072846800000, 22.643205829887], [1075525200000, 26.743156781239], [1078030800000, 29.597478802228], [1080709200000, 30.831697585341], [1083297600000, 28.054068024708], [1085976000000, 29.294079423832], [1088568000000, 30.269264061274], [1091246400000, 24.934526898906], [1093924800000, 24.265982759406], [1096516800000, 27.217794897473], [1099195200000, 30.802601992077], [1101790800000, 36.331003758254], [1104469200000, 43.142498700060], [1107147600000, 40.558263931958], [1109566800000, 42.543622385800], [1112245200000, 41.683584710331], [1114833600000, 36.375367302328], [1117512000000, 40.719688980730], [1120104000000, 43.897963036919], [1122782400000, 49.797033975368], [1125460800000, 47.085993935989], [1128052800000, 46.601972859745], [1130734800000, 41.567784572762], [1133326800000, 47.296923737245], [1136005200000, 47.642969612080], [1138683600000, 50.781515820954], [1141102800000, 52.600229204305], [1143781200000, 55.599684490628], [1146369600000, 57.920388436633], [1149048000000, 53.503593218971], [1151640000000, 53.522973979964], [1154318400000, 49.846822298548], [1156996800000, 54.721341614650], [1159588800000, 58.186236223191], [1162270800000, 63.908065540997], [1164862800000, 69.767285129367], [1167541200000, 72.534013373592], [1170219600000, 77.991819436573], [1172638800000, 78.143584404990], [1175313600000, 83.702398665233], [1177905600000, 91.140859312418], [1180584000000, 98.590960607028], [1183176000000, 96.245634754228], [1185854400000, 92.326364432615], [1188532800000, 97.068765332230], [1191124800000, 105.81025556260], [1193803200000, 114.38348777791], [1196398800000, 103.59604949810], [1199077200000, 101.72488429307], [1201755600000, 89.840147735028], [1204261200000, 86.963597532664], [1206936000000, 84.075505208491], [1209528000000, 93.170105645831], [1212206400000, 103.62838083121], [1214798400000, 87.458241365091], [1217476800000, 85.808374141319], [1220155200000, 93.158054469193], [1222747200000, 65.973252382360], [1225425600000, 44.580686638224], [1228021200000, 36.418977140128], [1230699600000, 38.727678144761], [1233378000000, 36.692674173387], [1235797200000, 30.033022809480], [1238472000000, 36.707532162718], [1241064000000, 52.191457688389], [1243742400000, 56.357883979735], [1246334400000, 57.629002180305], [1249012800000, 66.650985790166], [1251691200000, 70.839243432186], [1254283200000, 78.731998491499], [1256961600000, 72.375528540349], [1259557200000, 81.738387881630], [1262235600000, 87.539792394232], [1264914000000, 84.320762662273], [1267333200000, 90.621278391889], [1270008000000, 102.47144881651], [1272600000000, 102.79320353429], [1275278400000, 90.529736050479], [1277870400000, 76.580859994531], [1280548800000, 86.548979376972], [1283227200000, 81.879653334089], [1285819200000, 101.72550015956], [1288497600000, 107.97964852260], [1291093200000, 106.16240630785], [1293771600000, 114.84268599533], [1296450000000, 121.60793322282], [1298869200000, 133.41437346605], [1301544000000, 125.46646042904], [1304136000000, 129.76784954301], [1306814400000, 128.15798861044], [1309406400000, 121.92388706072], [1312084800000, 116.70036100870], [1314763200000, 88.367701837033], [1317355200000, 59.159665765725], [1320033600000, 79.793568139753], [1322629200000, 75.903834028417], [1325307600000, 72.704218209157], [1327986000000, 84.936990804097], [1330491600000, 93.388148670744]]
                },
                {
                    "key": "Series 2",
                    "area": true,
                    "values": [[1025409600000, 4], [1028088000000, 8], [1030766400000, 10], [1033358400000, 14], [1036040400000, 3], [1038632400000, 9], [1041310800000, -5.5310285460542], [1043989200000, -5.7838296963382], [1046408400000, -7.3249341615649], [1049086800000, -6.7078630712489], [1051675200000, 0.44227126150934], [1054353600000, 7.2481659343222], [1056945600000, 9.2512381306992], [1059624000000, 11.341210982529], [1062302400000, 14.734820409020], [1064894400000, 12.387148007542], [1067576400000, 18.436471461827], [1070168400000, 19.830742266977], [1072846800000, 22.643205829887], [1075525200000, 26.743156781239], [1078030800000, 29.597478802228], [1080709200000, 30.831697585341], [1083297600000, 28.054068024708], [1085976000000, 29.294079423832], [1088568000000, 30.269264061274], [1091246400000, 24.934526898906], [1093924800000, 24.265982759406], [1096516800000, 27.217794897473], [1099195200000, 30.802601992077], [1101790800000, 36.331003758254], [1104469200000, 43.142498700060], [1107147600000, 40.558263931958], [1109566800000, 42.543622385800], [1112245200000, 41.683584710331], [1114833600000, 36.375367302328], [1117512000000, 40.719688980730], [1120104000000, 43.897963036919], [1122782400000, 49.797033975368], [1125460800000, 47.085993935989], [1128052800000, 46.601972859745], [1130734800000, 41.567784572762], [1133326800000, 47.296923737245], [1136005200000, 47.642969612080], [1138683600000, 50.781515820954], [1141102800000, 52.600229204305], [1143781200000, 55.599684490628], [1146369600000, 57.920388436633], [1149048000000, 53.503593218971], [1151640000000, 53.522973979964], [1154318400000, 49.846822298548], [1156996800000, 54.721341614650], [1159588800000, 58.186236223191], [1162270800000, 63.908065540997], [1164862800000, 69.767285129367], [1167541200000, 72.534013373592], [1170219600000, 77.991819436573], [1172638800000, 78.143584404990], [1175313600000, 83.702398665233], [1177905600000, 91.140859312418], [1180584000000, 98.590960607028], [1183176000000, 96.245634754228], [1185854400000, 92.326364432615], [1188532800000, 97.068765332230], [1191124800000, 105.81025556260], [1193803200000, 114.38348777791], [1196398800000, 103.59604949810], [1199077200000, 101.72488429307], [1201755600000, 89.840147735028], [1204261200000, 86.963597532664], [1206936000000, 84.075505208491], [1209528000000, 93.170105645831], [1212206400000, 103.62838083121], [1214798400000, 87.458241365091], [1217476800000, 85.808374141319], [1220155200000, 93.158054469193], [1222747200000, 65.973252382360], [1225425600000, 44.580686638224], [1228021200000, 36.418977140128], [1230699600000, 38.727678144761], [1233378000000, 36.692674173387], [1235797200000, 30.033022809480], [1238472000000, 36.707532162718], [1241064000000, 52.191457688389], [1243742400000, 56.357883979735], [1246334400000, 57.629002180305], [1249012800000, 66.650985790166], [1251691200000, 70.839243432186], [1254283200000, 78.731998491499], [1256961600000, 72.375528540349], [1259557200000, 81.738387881630], [1262235600000, 87.539792394232], [1264914000000, 84.320762662273], [1267333200000, 90.621278391889], [1270008000000, 102.47144881651], [1272600000000, 102.79320353429], [1275278400000, 90.529736050479], [1277870400000, 76.580859994531], [1280548800000, 86.548979376972], [1283227200000, 81.879653334089], [1285819200000, 101.72550015956], [1288497600000, 107.97964852260], [1291093200000, 106.16240630785], [1293771600000, 114.84268599533], [1296450000000, 121.60793322282], [1298869200000, 133.41437346605], [1301544000000, 125.46646042904], [1304136000000, 129.76784954301], [1306814400000, 128.15798861044], [1309406400000, 87.92388706072], [1312084800000, 35.70036100870], [1314763200000, 78.367701837033], [1317355200000, 29.159665765725], [1320033600000, 39.793568139753], [1322629200000, 75.903834028417], [1325307600000, 72.704218209157], [1327986000000, 84.936990804097], [1330491600000, 93.388148670744]]
                }];
    $scope.legendColorFunction = function () {
        return function (d) {
            return '#E01B5D';
        }
    };

    //configuration examples
    $scope.xAxisTickFormat = function(){
        return function(d){
            return d3.time.format('%x')(new Date(d));
        }
    }
}

// Todos os metodos relacionados as Cidades
app.controller('cidadeController', ['$scope', '$http', cidadeController]);

function cidadeController($scope, $http) {


    $http.get('http://localhost:61062/api/CidadesWebAPI/GetCidade').success(function (data) {
        $scope.listacidade = data;
    }).error(function () {
    });

    $scope.ClearFields = function () {
        $scope.cd_cidade = "";
        $scope.nm_cidade = "";
		$scope.cd_microregiao = "";
		$scope.cd_estado = "";
    }


    function ObterCidade() {
        var CelularesData = $http.get('http://localhost:61062/api/CidadesWebAPI/GetCidade');

        CelularesData.then(function (Cidade) {
            $scope.listacidade = Cidade.data;

        }, function () {
            toastr["Error"]("Erro ao Obter as Unidades", "")
        })
    }


    function GetAllCidades() {
        $http.get('http://localhost:61062/api/CidadesWebAPI/GetCidade').success(function (data) {
            $scope.listacidades = data;
        }).error(function () {
        });
    }

    function GetAllMicroRegiao() {
        $http.get('http://localhost:61062/api/MicroRegioesWebAPI/GetMicroRegiao').success(function (data) {
            $scope.myOptions = data;
        }).error(function () {
        });

    }
	
	function GetAllEstados() {
        $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado').success(function (data) {
            $scope.myOptionsEstado = data;
        }).error(function () {
        });

    }
	

    $scope.obterCidadePorId = function (Cidade) {

        var res = $http.get('http://localhost:61062/api/CidadesWebAPI/GetCidade/' + JSON.stringify(Cidade.cd_cidade));

        res.success(function (Cidade) {
            $scope.cidade = Cidade.data;
            $scope.cd_cidade = Cidade.cd_cidade;
            $scope.nm_cidade = Cidade.nm_cidade;
            $scope.cd_estado = Cidade.cd_estado;
            $scope.cd_microregiao = Cidade.cd_microregiao;
            console.log(Cidade);
        });
        res.error(function (Cidade) {
        });

    }

    $scope.atualizacidade = function () {
        var cidade = {
            cd_cidade: $scope.cd_cidade,
            nm_cidade: $scope.nm_cidade,
			cd_estado: $scope.cd_estado,
			cd_microregiao: $scope.cd_microregiao
        };

        console.log(cidade);

        var res = $http.put('http://localhost:61062/api/CidadesWebAPI/PutCidade/' + $scope.cd_cidade, cidade);
        res.success(function (data) {
            console.log(data);

			GetAllCidades();
			
            GetAllEstados();

            GetAllMicroRegiao();
			

        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(cidade);

    }

    $http.get('http://localhost:61062/api/MicroRegioesWebAPI/GetMicroRegiao').success(function (data) {
        $scope.myOptions = data;
    }).error(function () {
    });
	
	$http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado').success(function (data) {
            $scope.myOptionsEstado = data;
        }).error(function () {
    });
	
    $http.get('http://localhost:61062/api/CidadesWebAPI/GetCidade').success(function (data) {
        $scope.listacidades = data;
    }).error(function () {
    });


    $scope.deletecidade = function (Cidade) {

        var res = $http.delete('http://localhost:61062/api/CidadesWebAPI/DeleteCidade/' + JSON.stringify(Cidade.cd_cidade));

        res.success(function (data) {
            console.log(data);
            $http.get('http://localhost:61062/api/CidadesWebAPI/GetCidade').success(function (data) {
                $scope.listacidades = data;
            }).error(function () {
            });
        });
        res.error(function (data) {
            console.log(data);
        });


    }

    $scope.postcidade = function (cd_microregiao,cd_estado) {
        var cidade = {
            "nm_cidade": $scope.nm_cidade,
			"cd_estado": cd_estado,
			"cd_microregiao": cd_microregiao
        }; console.log(cidade);
        var res = $http.post('http://localhost:61062/api/CidadesWebAPI/PostCidade', cidade);
        res.success(function (data) {
            console.log(data);
        });
        res.error(function (data) {
            console.log(data);
        });

        $scope.listacidades.push(cidade);
    }
}


// Todos os metodos relacionados as Micros Regiões
app.controller('microregiaoController', ['$scope', '$http', microregiaoController]);

function microregiaoController($scope, $http) {

    $http.get('http://localhost:61062/api/MicroRegioesWebAPI/GetMicroRegiao').success(function (data) {
        $scope.listamicroregiao = data;
    }).error(function () {
    });

    $scope.deletemicroregiao = function (MicroRegiao) {

        var res = $http.delete('http://localhost:61062/api/MicroRegioesWebAPI/DeleteMicroRegiao/' + JSON.stringify(MicroRegiao.cd_microregiao));

        res.success(function (data) {
            GetAllMicroRegiao()
        });
        res.error(function (data) {
        });
    }

    $scope.postmicroregiao = function () {
        var microregiao = {
            "nm_microregiao": $scope.nm_microregiao
        }; var res = $http.post('http://localhost:61062/api/MicroRegioesWebAPI/PostMicroRegiao', microregiao);
        res.success(function (data) {
            console.log(MicroRegiao);
        });
        res.error(function (data) {
        });

        $scope.listamicroregiao.push(microregiao);
    }

    $scope.ClearFields = function () {
        $scope.cd_microregiao = "";
        $scope.nm_microregiao = "";
    }

    function GetAllMicroRegiao() {
        $http.get('http://localhost:61062/api/MicroRegioesWebAPI/GetMicroRegiao').success(function (data) {
            $scope.listamicroregiao = data;
        }).error(function () {
        });

    }

    $scope.obterMicroRegiaoPorId = function (MicroRegiao) {

        var res = $http.get('http://localhost:61062/api/MicroRegioesWebAPI/GetMicroRegiao/' + JSON.stringify(MicroRegiao.cd_microregiao));

        res.success(function (MicroRegiao) {
            $scope.microregiao = MicroRegiao.data;
            $scope.cd_microregiao = MicroRegiao.cd_microregiao;
            $scope.nm_microregiao = MicroRegiao.nm_microregiao;
            console.log(MicroRegiao);
        });
        res.error(function (MicroRegiao) {
        });

    }

    $scope.atualizamicroregiao = function () {
        var microregiao = {
            cd_microregiao: $scope.cd_microregiao,
            nm_microregiao: $scope.nm_microregiao
        };

        console.log(microregiao);

        var res = $http.put('http://localhost:61062/api/MicroRegioesWebAPI/PutMicroRegiao/' + $scope.cd_microregiao, microregiao);
        res.success(function (data) {
            console.log(data);
            GetAllMicroRegiao();

        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(microregiao);

    }
}

// Todas os metodos relacionados ao Pais
app.controller('paisController', ['$scope', '$http', paisController]);

function paisController($scope, $http) {


    $scope.ClearFields = function () {
        $scope.cd_pais = "";
        $scope.nm_pais = "";
    }

    $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
        $scope.listapais = data;
    }).error(function () {
    });

    $scope.deletepais = function (Pais) {

        var res = $http.delete('http://localhost:61062/api/PaisWebAPI/DeletePais/' + JSON.stringify(Pais.cd_pais));

        res.success(function (data) {

            GetAllPais();

        });
        res.error(function (data) {

        });

    }

    function GetAllPais() {
        $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
            $scope.listapais = data;
        }).error(function () {
        });

    }

    $scope.obterPaisPorId = function (Pais) {

        var res = $http.get('http://localhost:61062/api/PaisWebAPI/GetPais/' + JSON.stringify(Pais.cd_pais));

        res.success(function (Pais) {
            $scope.pais = Pais.data;
            $scope.cd_pais = Pais.cd_pais;
            $scope.nm_pais = Pais.nm_pais;
            console.log(Pais);
        });
        res.error(function (Pais) {
        });

    }

    $scope.atualizapais = function (){
        var pais = {
            cd_pais: $scope.cd_pais,
            nm_pais: $scope.nm_pais
        };

        console.log(pais);

        var res = $http.put('http://localhost:61062/api/PaisWebAPI/PutPais/' + $scope.cd_pais, pais);
        res.success(function (data) {
            console.log(data);
            GetAllPais();
            
        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(pais);

    }

    $scope.postpais = function () {
        var pais = {
            "nm_pais": $scope.nm_pais
        }; var res = $http.post('http://localhost:61062/api/PaisWebAPI/PostPais', pais);
        res.success(function (data) {
            toastr['success']("Pais cadastrado com sucesso", "SensorMed - Medições de Dados");
        });
        res.error(function (data) {
        });

        $scope.listapais.push(pais);
    }
}

// Todos os metodos relacionados aos Estados

app.controller('estadoController', ['$scope', '$http', estadoController]);

function estadoController($scope, $http) {

    $scope.ClearFields = function () {
        $scope.cd_estado = "";
        $scope.nm_estado = "";
        $scope.cd_pais = "";
    }

    $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
        $scope.myOptions = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado').success(function (data) {
        $scope.listaestado = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
        $scope.NomePais = data;
    }).error(function () {
    });


    function ObterEstado()
    {
        var CelularesData = $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado');

        CelularesData.then(function (Estado) {
                $scope.listaestado = Estado.data;

            }, function()
            {
                toastr["Error"]("Erro ao Obter os Celulares", "DevMedia - Crud com MVC e AngularJs")
            })
    }


    function GetAllEstados() {
        $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado').success(function (data) {
            $scope.listaestado = data;
        }).error(function () {
        });
    }

    function GetAllPais() {
        $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
            $scope.myOptions = data;
        }).error(function () {
        });

    }


    $scope.obterEstadoPorId = function (Estado) {

        var res = $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado/' + JSON.stringify(Estado.cd_estado));

        res.success(function (Estado) {
            $scope.estado = Estado.data;
            $scope.cd_estado = Estado.cd_estado;
            $scope.nm_estado = Estado.nm_estado;
            $scope.cd_pais = Estado.cd_pais;
            console.log(Estado);
        });
        res.error(function (estado) {
        });

    }

    $scope.atualizaestado = function (){
        var estado = {
            cd_estado: $scope.cd_estado,
            nm_estado: $scope.nm_estado,
            cd_pais: $scope.cd_pais
        };

        console.log(estado);

        var res = $http.put('http://localhost:61062/api/EstadosWebAPI/PutEstado/' + $scope.cd_estado, estado);
        res.success(function (data) {
            console.log(data);

            GetAllEstados();

            GetAllPais();

            
        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(estado);

    }
    

    $scope.deleteestado = function (Estado) {

        var res = $http.delete('http://localhost:61062/api/EstadosWebAPI/DeleteEstado/' + JSON.stringify(Estado.cd_estado));

        res.success(function (data) {
            console.log(data);
            $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado').success(function (data) {
                $scope.listaestado = data;
            }).error(function () {
            });
        });
        res.error(function (data) {
            console.log(data);
        });


    }

    $scope.postestado = function (cd_pais) {
        var estado = {
            "nm_estado": $scope.nm_estado,
            "cd_pais": cd_pais
        }; var res = $http.post('http://localhost:61062/api/EstadosWebAPI/PostEstado', estado);
        res.success(function (data) {
            console.log(data);
        });
        res.error(function (data) {
            console.log(data);
        });

        $scope.listaestado.push(estado);
    }
}

// Todos os metodos relacionados aos Bairros

app.controller('bairroController', ['$scope', '$http', bairroController]);

function bairroController($scope, $http) {

    $scope.ClearFields = function () {
        $scope.cd_bairro = "";
        $scope.nm_bairro = "";
        $scope.cd_cidade = "";
    }


    function ObterBairro()
    {
        var BairroData = $http.get('http://localhost:61062/api/BairrosWebAPI/GetBairro');

        BairroData.then(function (Bairro) {
                $scope.listabairro = Bairro.data;

            }, function()
            {
                toastr["Error"]("Erro ao Obter os Bairros", "")
            })
    }


    function GetAllBairros() {
        $http.get('http://localhost:61062/api/BairrosWebAPI/GetBairro').success(function (data) {
            $scope.listabairro = data;
        }).error(function () {
        });
    }

    function GetAllCidade() {
        $http.get('http://localhost:61062/api/CidadesWebAPI/GetCidade').success(function (data) {
            $scope.myOptions = data;
        }).error(function () {
        });

    }


    $scope.obterBairroPorId = function (Bairro) {

        var res = $http.get('http://localhost:61062/api/BairrosWebAPI/GetBairro/' + JSON.stringify(Bairro.cd_Bairro));

        res.success(function (Bairro) {
            $scope.bairro = Bairro.data;
            $scope.cd_bairro = Bairro.cd_bairro;
            $scope.nm_bairro = Bairro.nm_bairro;
            $scope.cd_cidade = Bairro.cd_cidade;
            console.log(Bairro);
        });
        res.error(function (Bairro) {
        });

    }

    $scope.atualizabairro = function (){
        var bairro = {
            cd_bairro: $scope.cd_bairro,
            nm_bairro: $scope.nm_bairro,
            cd_cidade: $scope.cd_cidade
        };

        console.log(bairro);

        var res = $http.put('http://localhost:61062/api/BairrosWebAPI/PutBairro/' + $scope.cd_bairro, bairro);
        res.success(function (data) {
            console.log(data);

            GetAllBairros();

            GetAllCidade();

            
        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(bairro);

    }
    
    $http.get('http://localhost:61062/api/CidadesWebAPI/GetCidade').success(function (data) {
        $scope.myOptions = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/BairrosWebAPI/GetBairro').success(function (data) {
        $scope.listabairro = data;
    }).error(function () {
    });
	
    $http.get('http://localhost:61062/api/CidadesWebAPI/GetCidade').success(function (data) {
        $scope.NomeCidade = data;
    }).error(function () {
    });

    $scope.deletebairro = function (Bairro) {

        var res = $http.delete('http://localhost:61062/api/BairrosWebAPI/DeleteBairro/' + JSON.stringify(Bairro.cd_bairro));

        res.success(function (data) {
            console.log(data);
            $http.get('http://localhost:61062/api/BairrosWebAPI/GetBairro').success(function (data) {
                $scope.listabairro = data;
            }).error(function () {
            });
        });
        res.error(function (data) {
            console.log(data);
        });


    }

    $scope.postbairro = function (cd_cidade) {
        var bairro = {
            "nm_bairro": $scope.nm_bairro,
            "cd_cidade": cd_cidade
        }; var res = $http.post('http://localhost:61062/api/BairrosWebAPI/PostBairro', bairro);
        res.success(function (data) {
            console.log(data);
        });
        res.error(function (data) {
            console.log(data);
        });

        $scope.listabairro.push(bairro);
    }
}

// Todos os metodos relacionados aos Endereços

app.controller('enderecoController', ['$scope', '$http', enderecoController]);

function enderecoController($scope, $http) {

    $scope.ClearFields = function () {
        $scope.cd_ender = "";
        $scope.nm_ender = "";
		$scope.CEP = "";
		$scope.numero = "";
		$scope.descricao = "";
		$scope.cd_bairro = "";
    }

    function ObterEndereco()
    {
        var CelularesData = $http.get('http://localhost:61062/api/EnderecosWebAPI/GetEndereco');

        CelularesData.then(function (Endereco) {
                $scope.listaendereco = Endereco.data;

            }, function()
            {
                toastr["Error"]("Erro ao Obter os Celulares", "DevMedia - Crud com MVC e AngularJs")
            })
    }


    function GetAllEnderecos() {
        $http.get('http://localhost:61062/api/EnderecosWebAPI/GetEndereco').success(function (data) {
            $scope.listaendereco = data;
        }).error(function () {
        });
    }

    function GetAllBairros() {
        $http.get('http://localhost:61062/api/BairrosWebAPI/GetBairro').success(function (data) {
            $scope.myOptions = data;
        }).error(function () {
        });

    }


    $scope.obterEnderecoPorId = function (Endereco) {

        var res = $http.get('http://localhost:61062/api/EnderecosWebAPI/GetEndereco/' + JSON.stringify(Endereco.cd_ender));

        res.success(function (Endereco) {
            $scope.endereco = Endereco.data;
            $scope.cd_ender = Endereco.cd_ender;
            $scope.nm_ender = Endereco.nm_ender;
			$scope.CEP      = Endereco.CEP;
			$scope.numero   = Endereco.numero;
			$scope.descricao   = Endereco.descricao;
			$scope.cd_bairro   = Endereco.cd_bairro;
            console.log(Endereco);
        });
        res.error(function (Endereco) {
        });

    }

    $scope.atualizaendereco = function (){
        var endereco = {
            cd_ender: $scope.cd_ender,
            nm_ender: $scope.nm_ender,
			CEP: $scope.CEP,
			numero: $scope.numero,
			descricao: $scope.descricao,
            cd_bairro: $scope.cd_bairro
        };

        console.log(endereco);

        var res = $http.put('http://localhost:61062/api/EnderecosWebAPI/PutEndereco/' + $scope.cd_ender, endereco);
        res.success(function (data) {
            console.log(data);

            GetAllEnderecos();

            GetAllBairros();

            
        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(endereco);

    }
    
    $http.get('http://localhost:61062/api/BairrosWebAPI/GetBairro').success(function (data) {
        $scope.myOptions = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/EnderecosWebAPI/GetEndereco').success(function (data) {
        $scope.listaendereco = data;
    }).error(function () {
    });
	
    $http.get('http://localhost:61062/api/BairrosWebAPI/GetBairro').success(function (data) {
        $scope.NomeBairro = data;
    }).error(function () {
    });

    $scope.deleteendereco = function (Endereco) {

        var res = $http.delete('http://localhost:61062/api/EnderecosWebAPI/DeleteEndereco/' + JSON.stringify(Endereco.cd_ender));

        res.success(function (data) {
            console.log(data);
            $http.get('http://localhost:61062/api/EnderecosWebAPI/GetEndereco').success(function (data) {
                $scope.listaendereco = data;
            }).error(function () {
            });
        });
        res.error(function (data) {
            console.log(data);
        });


    }

    $scope.postendereco = function (cd_bairro) {
        var endereco = {
            "nm_ender": $scope.nm_ender,
			"CEP": $scope.CEP,
			"numero": $scope.numero,
			"descricao": $scope.descricao,
            "cd_bairro": cd_bairro
        }; var res = $http.post('http://localhost:61062/api/EnderecosWebAPI/PostEndereco', endereco);
        res.success(function (data) {
            console.log(data);
        });
        res.error(function (data) {
            console.log(data);
        });

        $scope.listaendereco.push(endereco);
    }
}

// Todos os metodos relacionados ao Grupo de Unidade
app.controller('gruniController', ['$scope', '$http', gruniController]);

function gruniController($scope, $http) {

    $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni').success(function (data) {
        $scope.listagruni = data;
    }).error(function () {
    });

    $scope.deletegruni = function (Gruni) {

        var res = $http.delete('http://localhost:61062/api/GrunisWebAPI/DeleteGruni/' + JSON.stringify(Gruni.cd_gruni));

        res.success(function (data) {
            GetAllGruni()
        });
        res.error(function (data) {
        });
    }

    $scope.postgruni = function () {
        var gruni = {
            "nm_gruni": $scope.nm_gruni
        }; var res = $http.post('http://localhost:61062/api/GrunisWebAPI/PostGruni', gruni);
        res.success(function (data) {
        });
        res.error(function (data) {
        });

        $scope.listagruni.push(gruni);
    }

    $scope.ClearFields = function () {
        $scope.cd_gruni = "";
        $scope.nm_gruni = "";
    }

    function GetAllGruni() {
        $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni').success(function (data) {
            $scope.listagruni = data;
        }).error(function () {
        });

    }

    $scope.obterGruniPorId = function (Gruni) {

        var res = $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni/' + JSON.stringify(Gruni.cd_gruni));

        res.success(function (Gruni) {
            $scope.gruni = Gruni.data;
            $scope.cd_gruni = Gruni.cd_gruni;
            $scope.nm_gruni = Gruni.nm_gruni;
            console.log(Gruni);
        });
        res.error(function (Gruni) {
        });

    }

    $scope.atualizagruni = function () {
        var gruni = {
            cd_gruni: $scope.cd_gruni,
            nm_gruni: $scope.nm_gruni
        };

        console.log(gruni);

        var res = $http.put('http://localhost:61062/api/GrunisWebAPI/PutGruni/' + $scope.cd_gruni, gruni);
        res.success(function (data) {
            console.log(data);
            GetAllGruni();

        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(gruni);

    }
}

// Todos os metodos relacionados as Unidades

app.controller('unidadeController', ['$scope', '$http', unidadeController]);

function unidadeController($scope, $http) {

    $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade').success(function (data) {
        $scope.listaunidade = data;
    }).error(function () {
    });

    $scope.ClearFields = function () {
        $scope.cd_unida = "";
        $scope.nm_unida = "";
        $scope.abrv_unida = "";
        $scope.cd_gruni = "";
    }


    function ObterUnidade() {
        var CelularesData = $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade');

        CelularesData.then(function (Unidade) {
            $scope.listaunidade = Unidade.data;

        }, function () {
            toastr["Error"]("Erro ao Obter as Unidades", "")
        })
    }


    function GetAllUnidades() {
        $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade').success(function (data) {
            $scope.listaunidade = data;
        }).error(function () {
        });
    }

    function GetAllGruni() {
        $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni').success(function (data) {
            $scope.myOptions = data;
        }).error(function () {
        });

    }


    $scope.obterUnidadePorId = function (Unidade) {

        var res = $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade/' + JSON.stringify(Unidade.cd_unida));

        res.success(function (Unidade) {
            $scope.unidade = Unidade.data;
            $scope.cd_unida = Unidade.cd_unida;
            $scope.nm_unida = Unidade.nm_unida;
            $scope.abrv_unida = Unidade.abrv_unida;
            $scope.cd_gruni = Unidade.cd_gruni;
            console.log(Unidade);
        });
        res.error(function (Unidade) {
        });

    }

    $scope.atualizaunidade = function () {
        var unidade = {
            cd_unida: $scope.cd_unida,
            nm_unida: $scope.nm_unida,
            abrv_unida: $scope.abrv_unida,
            cd_gruni: $scope.cd_gruni
        };

        console.log(unidade);

        var res = $http.put('http://localhost:61062/api/UnidadesWebAPI/PutUnidade/' + $scope.cd_unida, unidade);
        res.success(function (data) {
            console.log(data);

            GetAllUnidades();

            GetAllGruni();


        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(unidade);

    }

    $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni').success(function (data) {
        $scope.myOptions = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/UnidadesWebAPI/GetEUnidade').success(function (data) {
        $scope.listaunidade = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni').success(function (data) {
        $scope.NomeGruni = data;
    }).error(function () {
    });

    $scope.deleteunidade = function (Unidade) {

        var res = $http.delete('http://localhost:61062/api/UnidadesWebAPI/DeleteUnidade/' + JSON.stringify(Unidade.cd_unida));

        res.success(function (data) {
            console.log(data);
            $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade').success(function (data) {
                $scope.listaunidade = data;
            }).error(function () {
            });
        });
        res.error(function (data) {
            console.log(data);
        });


    }

    $scope.postunidade = function (cd_gruni) {
        var unidade = {
            "nm_unida": $scope.nm_unida,
            "abrv_unida": $scope.nm_unida,
            "cd_gruni": cd_gruni
        }; var res = $http.post('http://localhost:61062/api/UnidadesWebAPI/PostUnidade', unidade);
        res.success(function (data) {
            console.log(data);
        });
        res.error(function (data) {
            console.log(data);
        });

        $scope.listaunidade.push(unidade);
    }
}

// Todos os metodos relacionados ao Tipo de Sensor
app.controller('tiposensorController', ['$scope', '$http', tiposensorController]);

function tiposensorController($scope, $http) {

    $http.get('http://localhost:61062/api/TipoSensorWebAPI/GetTipoSensor').success(function (data) {
        $scope.listatiposensor = data;
    }).error(function () {
    });

    $scope.deletetiposensor = function (TipoSensor) {

        var res = $http.delete('http://localhost:61062/api/TipoSensorWebAPI/DeleteTipoSensor/' + JSON.stringify(TipoSensor.cd_tpsensor));

        res.success(function (data) {
            GetAllTipoSensor()
        });
        res.error(function (data) {
        });
    }

    $scope.posttiposensor = function () {
        var tiposensor = {
            "nm_tpsensor": $scope.nm_tpsensor
        }; var res = $http.post('http://localhost:61062/api/TipoSensorWebAPI/PostTipoSensor', tiposensor);
        res.success(function (data) {
        });
        res.error(function (data) {
        });

        $scope.listatiposensor.push(tiposensor);
    }

    $scope.ClearFields = function () {
        $scope.cd_tpsensor = "";
        $scope.nm_tpsensor = "";
    }

    function GetAllTipoSensor() {
        $http.get('http://localhost:61062/api/TipoSensorWebAPI/GetTipoSensor').success(function (data) {
            $scope.listatiposensor = data;
        }).error(function () {
        });

    }

    $scope.obterTipoSensorPorId = function (TipoSensor) {

        var res = $http.get('http://localhost:61062/api/TipoSensorWebAPI/GetTipoSensor/' + JSON.stringify(TipoSensor.cd_tiposensor));

        res.success(function (TipoSensor) {
            $scope.tiposensor = TipoSensor.data;
            $scope.cd_tpsensor = TipoSensor.cd_tpsensor;
            $scope.nm_tpsensor = TipoSensor.nm_tpsensor;
            console.log(TipoSensor);
        });
        res.error(function (TipoSensor) {
        });

    }

    $scope.atualizatiposensor = function () {
        var tiposensor = {
            cd_tpsensor: $scope.cd_tpsensor,
            nm_tpsensor: $scope.nm_tpsensor
        };

        console.log(tiposensor);

        var res = $http.put('http://localhost:61062/api/TipoSensorWebAPI/PutTipoSensor/' + $scope.cd_tpsensor, tiposensor);
        res.success(function (data) {
            console.log(data);
            GetAllTipoSensor();

        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(tiposensor);

    }
}

    
// Todos os metodos relacionados aos Sensores

app.controller('sensorController', ['$scope', '$http', sensorController]);

function sensorController($scope, $http) {

    $http.get('http://localhost:61062/api/SensoresWebAPI/GetSensor').success(function (data) {
        $scope.listasensores = data;
    }).error(function () {
    });

    $scope.ClearFields = function () {
        $scope.cd_sensor = "";
        $scope.nm_sensor = "";
        $scope.cd_tpsensor = "";
        $scope.cd_unida = "";
        $scope.cd_ender = "";
        $scope.tag_sensor = "";
    }


    function ObterSensor() {
        var CelularesData = $http.get('http://localhost:61062/api/SensoresWebAPI/GetSensor');

        CelularesData.then(function (Sensor) {
            $scope.listasensores = Sensor.data;

        }, function () {
            toastr["Error"]("Erro ao Obter as Unidades", "")
        })
    }


    function GetAllSensores() {
        $http.get('http://localhost:61062/api/SensoresWebAPI/GetSensor').success(function (data) {
            $scope.listasensores = data;
        }).error(function () {
        });
    }

    function GetAllTipoSensor() {
        $http.get('http://localhost:61062/api/TipoSensorWebAPI/GetTipoSensor').success(function (data) {
            $scope.myOptions = data;
        }).error(function () {
        });

    }
	
    function GetAllUnidade() {
        $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade').success(function (data) {
            $scope.myOptionsUnidade = data;
        }).error(function () {
        });

    }
	
    function GetAllEndereco() {
        $http.get('http://localhost:61062/api/EnderecosWebAPI/GetEndereco').success(function (data) {
            $scope.myOptionsEndereco = data;
        }).error(function () {
        });

    }


    $scope.obterSensorPorId = function (Sensor) {

        var res = $http.get('http://localhost:61062/api/SensoresWebAPI/GetSensor/' + JSON.stringify(Sensor.cd_sensor));

        res.success(function (Sensor) {
            $scope.sensor = Sensor.data;
            $scope.cd_sensor = Sensor.cd_sensor;
            $scope.nm_sensor = Sensor.nm_sensor;
            $scope.tag_sensor = Sensor.tag_sensor;
            $scope.cd_tiposensor = Sensor.cd_tiposensor;
            $scope.cd_unida = Sensor.cd_unida;
            $scope.cd_ender = Sensor.cd_ender;
            console.log(Sensor);
        });
        res.error(function (Sensor) {
        });

    }

    $scope.atualizasensor = function () {
        var sensor = {
            cd_sensor: $scope.cd_sensor,
            nm_sensor: $scope.nm_sensor,
            tag_sensor: $scope.tag_sensor,
            cd_unida: $scope.cd_unida,
            cd_ender: $scope.cd_ender,
            cd_tiposensor: $scope.cd_tiposensor
        };

        console.log(sensor);

        var res = $http.put('http://localhost:61062/api/SensoresWebAPI/PutSensor/' + $scope.cd_sensor, sensor);
        res.success(function (data) {
            console.log(data);

            GetAllSensores();

            GetAllTipoSensor();
			
            GetAllUnidade();
			
            GetAllEndereco();


        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(sensor);

    }

    $http.get('http://localhost:61062/api/TipoSensorWebAPI/GetTipoSensor').success(function (data) {
        $scope.myOptions = data;
    }).error(function () {
    });
	
    $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade').success(function (data) {
        $scope.myOptionsUnidade = data;
    }).error(function () {
    });
	
    $http.get('http://localhost:61062/api/EnderecosWebAPI/GetEndereco').success(function (data) {
        $scope.myOptionsEndereco = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/SensoresWebAPI/GetSensor').success(function (data) {
        $scope.listasensores = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/TipoSensorWebAPI/GetTipoSensor').success(function (data) {
        $scope.NomeTipoSensor = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade').success(function (data) {
        $scope.NomeUnidade = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/EnderecosWebAPI/GetEndereco').success(function (data) {
        $scope.NomeEndereco = data;
    }).error(function () {
    });

    $scope.deletesensor = function (Sensor) {

        var res = $http.delete('http://localhost:61062/api/SensoresWebAPI/DeleteSensor/' + JSON.stringify(Sensor.cd_sensor));

        res.success(function (data) {
            console.log(data);
            $http.get('http://localhost:61062/api/SensoresWebAPI/GetSensor').success(function (data) {
                $scope.listasensores = data;
            }).error(function () {
            });
        });
        res.error(function (data) {
            console.log(data);
        });


    }

    $scope.postsensor = function (cd_unida, cd_ender, cd_tpsensor) {
        var sensor = {
            "nm_sensor": $scope.nm_sensor,
            "tag_sensor": $scope.tag_sensor,
            "cd_unida": cd_unida,
            "cd_ender": cd_ender,
            "cd_tpsensor": cd_tpsensor
        }; var res = $http.post('http://localhost:61062/api/SensoresWebAPI/PostSensor', sensor);
        res.success(function (data) {
            console.log(data);
        });
        res.error(function (data) {
            console.log(data);
        });

        $scope.listasensores.push(sensor);
    }
}
