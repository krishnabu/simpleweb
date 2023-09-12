let score=JSON.parse(localStorage.getItem('score'));
        if(score === null)
        {
            score={
                win:0,
                lose:0,
                tie:0
            };
        }
        document.querySelector('.js').innerHTML=`
wins:${score.win}, loses:${score.lose}, tie:${score.tie}`;
        function funp()
        {
            document.querySelector('.js').innerHTML=`wins:${score.win=0}, loses:${score.lose=0}, tie:${score.tie=0}`;
            document.querySelector('.re').innerHTML='';
        }
        function play(name) 
        {
            let conmove = playgame();
            let result='';
            if(name === 'rock')
            {
                if(conmove === 'rock')
                {
                    result= 'Tie';
                }
                else if(conmove === 'scissor')
                {
                    result= 'win';
                }
                else if(conmove === 'paper'){
                    result= 'lose';
                }
            }
            else if(name === 'paper')
            {
                if(conmove === 'rock')
                {
                    result= 'win';
                }
                else if(conmove === 'scissor')
                {
                    result= 'lose';
                }
                else if(conmove === 'paper')
                {
                    result= 'Tie';
                }
            }
            else if(name === 'scissor')
            {
                if(conmove === 'rock')
                {
                    result= 'lose'; 
                }
                else if(conmove === 'scissor')
                {
                    result= 'Tie';
                }
                else if(conmove === 'paper')
                {
                    result= 'win';
                }
            }
            if(result === 'win')
            {
                score.win+=1;
            }
            else if(result ==='Tie')
            {
                score.tie+=1;
            }
            else if(result === 'lose')
            {
                score.lose+=1;
            }
            document.querySelector('.js').innerHTML=`
wins:${score.win}, loses:${score.lose}, tie:${score.tie}`;
            document.querySelector('.re').innerHTML=`you ${result}`;
            localStorage.setItem('score',JSON.stringify(score));
            return result;
        }
        function playgame()
        {
            let num= Math.random();
            let res='';
            if(num >= 0 && num < 1/3)
            {
                res= 'rock';
            }
            else if(num >= 1/3 && num < 2/3)
            {
                res='paper';
            }
            else if(num >= 2/3 && num < 1)
            {
                res='scissor';
            }
            return res;
        }