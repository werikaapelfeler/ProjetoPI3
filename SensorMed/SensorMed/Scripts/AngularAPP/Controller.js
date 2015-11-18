var app = angular.module('app', []);

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
