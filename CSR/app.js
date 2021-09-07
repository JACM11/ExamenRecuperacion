

const main = async()=>{ 
    const res = await fetch('http://localhost:5000/api/encuesta',{
    method: 'GET',    
    headers:{
            "Content-Type": "application/json"
        }
    })
    let data = await res.json();
    let datos = data.data;
    let casosConSintomas = 0;
    let casosConfirmados = 0;
    let casosSinCOVID = 0;
    for (let i = 0; i < datos.length; i++) {
        casosConSintomas += datos[i].casosConSintomas;
        casosConfirmados += datos[i].casosConfirmados;
        casosSinCOVID += datos[i].casosSinCOVID;        
    }

    var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx,{
            type:"bar",
            data:{
                datasets:[{
                    label:'casos con sintomas',
                    data:[casosConSintomas],
                    backgroundColor:['rgb(100, 151, 204,0.5)']
                },
                {
                    label:'casos confirmados',
                    data:[casosConfirmados],
                    backgroundColor:['rgb(100, 51, 204,0.5)']
                },{
                    label:'casos sin COVID',
                    data:[casosSinCOVID],
                    backgroundColor:['rgb(0, 151, 24,0.5)']
                }]
            },
            options:{
                plugins: {
                    title: {
                      display: true,
                      text: 'Chart.js Bar Chart - Stacked'
                    },
                  },
                responsive: true,
                interaction: {
                    intersect: false,
                  },
                scales:{
                    x: {
                        stacked: true,
                      },
                    y: {
                        stacked: true
                      },
                    yAxes:[{
                        ticks:{
                            beginAtZero:true
                        }
                    }]
                }
            }
    
        });
}

main()
