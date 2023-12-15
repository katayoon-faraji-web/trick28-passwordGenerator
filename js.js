const imos = ['👁‍🗨','❌']
        let imo = document.getElementById('imo')
        let inp = document.getElementById('inp')
        let _line = document.getElementById('line')
        imo.innerHTML = imos[0]
        let status = 0

        const arr0 = []
        const arr1 = []
        const arr2 = []
        const arr3 = []
        for(let ind=48 ; ind<58 ; ind++){
            arr0.push(String.fromCharCode(ind))
        }
        for(let ind=97 ; ind<123 ; ind++){
            arr1.push(String.fromCharCode(ind))
        }
        for(let ind=65 ; ind<91 ; ind++){
            arr2.push(String.fromCharCode(ind))
        }
        for(let ind=33 ; ind<48 ; ind++){
            arr3.push(String.fromCharCode(ind))
        }
        console.log(arr3);
        imo.addEventListener('click',(e)=>{
            if(status==0){
                imo.innerHTML = imos[1]
                inp.setAttribute('type','text')
                status = 1

            }
            else{
                imo.innerHTML = imos[0]
                inp.setAttribute('type','password')
                status = 0
            }
        })
        let state = 0
        
        function func1(e) {
            let val = inp.value
            state = 0
            let w = 0
            let clr = ''
            if(val.length>=8){
                state++
                w+=25
            }
            if(val.search(/[a-z]/i)>=0){
                state++
                w+=25
            }
            if(val.search(/[0-9]/)>=0){
                state++
                w+=25
            }
            
            if(val.search(/[! @ # $ % & '' "" ('") * + = , - _ // ? . ^]/)>=0){
                state++
                w+=25
            }
           
            
            _line.style.width = w+'%'
            switch (w) {
                case 0:break;
                case 25: clr = 'red'; break;
                case 50: clr = 'orange'; break;
                case 75: clr = 'yellow'; break;
                case 100: clr = 'green'; break;
            
                default:
                    break;
            }
            _line.style.background = clr
        }
        function send(e){
            if(state != 4){
                e.preventDefault()
                inp.style.animationName = 'shake'
                setTimeout(() => {
                    inp.style.removeProperty('animation-name')
                }, 300);
            }
            
        }
        // ************pass generator**************************
        let btn2 = document.getElementById('btn2')
      
        btn2.addEventListener('click',(e)=>{
            let pass=''
            for(let i=0;i<8;i++){
                let rand_arr_num = Math.floor(Math.random()*4)
                let name = `arr${rand_arr_num}`
                let rand_num =''
                switch (name) {
                    case 'arr0':
                        rand_num = arr0[(Math.floor(Math.random()*(arr0.length)))]
                        break;
                    case 'arr1':
                        rand_num = arr1[(Math.floor(Math.random()*(arr1.length)))]
                        break;
                    case 'arr2':
                        rand_num = arr2[(Math.floor(Math.random()*(arr2.length)))]
                        break;
                    case 'arr3':
                        rand_num = arr3[(Math.floor(Math.random()*(arr3.length)))]
                        break;
                
                    default:
                        break;
                }
                pass += rand_num
                
            }
            inp.value = pass
            status = 0
            imo.click()
            func1(e)
        })