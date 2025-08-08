let i=0;
let grid=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
let ok=0,flag=0;
document.getElementById("trn").innerHTML = "O's turn";
function play(row,column,id){
    if(document.getElementById(id).innerHTML != ""){
        alert("This box is already filled. Please choose another box.");
        return;
    }
    if(ok){
        alert("The Game is Over Already Please Restart !!");
        return;
    }
    i++;
    if(i%2==1){
        document.getElementById("trn").innerHTML = "X's turn";
        document.getElementById(id).innerHTML = "O";
        grid[row][column]=0;
        console.log(grid);

}else{
        document.getElementById("trn").innerHTML = "O's turn";
        document.getElementById(id).innerHTML = "X";
        grid[row][column]=1;
        console.log(grid);
    }
    if(i>4){
        for (let j = 0; j < 3; j++) {
            if(grid[j][0]!=-1 && grid[j][0]==grid[j][1] && grid[j][2]==grid[j][1]){
                ok=1;
                if(grid[j][0]==0){
                document.getElementById("trn").innerHTML = "O wins!";
                console.log(grid);
                 reset();
                console.log(grid);
                return;}
                else{
                    document.getElementById("trn").innerHTML = "X wins!";
                    console.log(grid);
                    reset();
                    console.log(grid);
                return;
                }
            }          
        }
        for (let j = 0; j < 3; j++) {
            if(grid[0][j]!=-1 && grid[0][j]==grid[1][j] && grid[1][j]==grid[2][j]){
                ok=1;
                if(grid[0][j]==0){
                document.getElementById("trn").innerHTML = "O wins!";
                console.log(grid);
                reset();
                console.log(grid);
                return;
            }else{
                    document.getElementById("trn").innerHTML = "X wins!";
                    console.log(grid);
                    reset();
                    console.log(grid);
                return;
                }
            }          
        }
        if(grid[0][0]==grid[1][1] && grid[1][1]==grid[2][2] && grid[0][0]!=-1){
            ok=1;
                if(grid[0][0]==0){
                document.getElementById("trn").innerHTML = "O wins!";
                console.log(grid);
                reset();
                console.log(grid);
                return;
            }else{
                    document.getElementById("trn").innerHTML = "X wins!";
                    console.log(grid);
                    reset();
                    console.log(grid);
                return;
                }
        }
        if(grid[0][2]==grid[1][1] && grid[1][1]==grid[2][0] && grid[0][2]!=-1){
            ok=1;
                if(grid[1][1]==0){
                document.getElementById("trn").innerHTML = "O wins!";
                console.log(grid);
                reset();
                console.log(grid);
                return;
            }else{
                    document.getElementById("trn").innerHTML = "X wins!";
                    console.log(grid);
                    reset();
                    console.log(grid);
                return;
                }
        }

    }
    if(i==9){
        document.getElementById("trn").innerHTML = "DRAW!";
        reset();
        return;
    }
}
function reset(){
    grid=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
}
function restart(){
    i=0;
    grid=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    ok=0;
    document.getElementById("trn").innerHTML = "O's turn";
    let headings = document.getElementsByTagName('h2');
for (let i = 0; i < headings.length; i++) {
  headings[i].innerHTML = "";
}

}

