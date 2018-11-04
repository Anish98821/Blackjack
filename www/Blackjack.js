cards = ['AH.png', 'AS.png', 'AD.png', 'AC.png', 'QH.png', 'QS.png', 
		'QD.png', 'QC.png', 'KH.png', 'KS.png', 'KD.png', 'KC.png', 
		'JH.png', 'JS.png', 'JD.png', 'JC.png', '2H.png', '2S.png', 
		'2D.png', '2C.png', '3H.png','3S.png', '3D.png', '3C.png', 
		'4H.png', '4S.png', '4D.png', 
		'4C.png', '5H.png', '5S.png', '5D.png', '5C.png', '6H.png', 
		'6S.png', '6D.png', '6C.png', '7H.png', '7S.png', '7D.png', 
		'7C.png', '8H.png', '8S.png', '8D.png', '8C.png', '9H.png', 
		'9S.png', '9D.png', '9C.png', '10H.png', '10S.png', '10D.png', '10C.png']

atHandD = []
totalValueD = 0
atHandP = []
totalValueP = 0
A = 0
gameover = false
cardSpaceD = document.getElementsByClassName('dealer')
cardSpaceP = document.getElementsByClassName('player')
dealer = document.getElementById('dealer')
player = document.getElementById('player')
result = document.getElementById('result')
button = document.getElementsByTagName('button')
atHandDPics = []
atHandPPics = []
function newGame()
{
	atHandPPics = []
	atHandDPics = []
	atHandD = []
	totalValueD = 0
	atHandP = []
	totalValueP = 0
	A = 0
	gameover = false
	button[0].disabled = false
	button[1].disabled = false
	result.innerHTML = '' 
	for(i=0;i<6;i++)
	{
		cardSpaceD[i].src = 'PNG\\frame.png'
		cardSpaceP[i].src = 'PNG\\frame.png'
	}
	gameplay()
	
}
function hitD()
{
	chosen = cards[Math.floor(Math.random() * cards.length)]
	card = chosen[0]
	path = 'PNG\\'+chosen
	atHandDPics.push(path)
	if (card == 'K' || card =='Q' || card == 'J' || card == '1')
	{ 
		totalValueD += 10
	}
	else if (card == 'A')
	{
		if (11+parseInt(totalValueD) > 21)
		{
			totalValueD += 1
		}
		else
		{
			totalValueD += 11
		}
	}
	else
	{
		totalValueD += parseInt(card)
	} 
	if (card == '1')
	{
		atHandD.push('10')
	}
	else 
	{
		atHandD.push(card)
	}
	dealer.innerHTML = 'Dealer = ' + totalValueD + ' ['+ atHandD +']'
	for(i=0;i<atHandDPics.length;i++)
	{
		cardSpaceD[i].src = atHandDPics[i]
	}		
}
function hitP()
{
	chosen = cards[Math.floor(Math.random() * cards.length)]
	card = chosen[0]
	path = 'PNG\\'+chosen
	atHandPPics.push(path)
	if (card == 'K' || card =='Q' || card == 'J' || card == '1')
	{ 
		totalValueP += 10
	}
	else if (card == 'A')
	{
		if (11+parseInt(totalValueP) > 21)
		{
			totalValueP += 1
		}
		else
		{
			totalValueP += 11
		}
	}
	else
	{
	totalValueP += parseInt(card)
	} 
	if (card == '1')
	{
	atHandP.push('10')
	}
	else 
	{
	atHandP.push(card)
	}
	player.innerHTML = 'Player = ' + totalValueP + ' ['+ atHandP +']'

	if (totalValueP > 21)
	{
		result.innerHTML ="YOU BUST!! YOU LOOSE!"
		button[0].disabled = true
		button[1].disabled = true
		gameover = true
	}
	for(i=0;i<atHandPPics.length;i++)
	{
		cardSpaceP[i].src = atHandPPics[i]
	}
}		

function stand(){
	if (totalValueP <=21 && gameover == false) 
	{		
		dealer.innerHTML = 'Dealer = ' + totalValueD + ' ['+ atHandD +']'
		while (totalValueD <= 16 && totalValueP > totalValueD)	
		{
			result.innerHTML ="DEALER CHOOSES TO HIT"
			dealer.innerHTML = 'Dealer = ' + totalValueD + ' ['+ atHandD +']'
			hitD()
			if (totalValueD > 21)
			{
				result.innerHTML ="DEALER BUSTS! YOU WIN!"
				gameover = true
				button[0].disabled = true
				button[1].disabled = true
				break
			}
			else if (totalValueD > 16)
			{
				result.innerHTML ="DEALER DECIDES TO STAND"
				break
				break
			}
		}
	}
		if (gameover == false) {
	
			if (totalValueD == totalValueP)
			{
				result.innerHTML ="PUSH! NOTHING WON, NOTHING LOST!"
				button[0].disabled = true
				button[1].disabled = true
			}
			else if (totalValueD < totalValueP)
			{
				result.innerHTML ="YOU WIN!!"
				button[0].disabled = true
				button[1].disabled = true
			}
			else if (totalValueP < totalValueD)
			{
				result.innerHTML ="DEALER WINS!!"
				button[0].disabled = true
				button[1].disabled = true
		}
	}
}

function gameplay()
{
	hitD()
	hitD()
	hitP()
	hitP()

	if (totalValueP == 21)
	{
		result.innerHTML ="CONGRATULATION!! YOU HAVE A BLACKJACK YOU WIN"
		button[0].disabled = true
		button[1].disabled = true
		gameover = true
	}
	if (totalValueD == 21)
	{
		result.innerHTML ="DEALER HAS BLACKJACK. YOU LOOSE!"
		button[0].disabled = true
		button[1].disabled = true
		gameover = true
	}
	if (totalValueD == 21 && totalValueP == 21)
	{
		result.innerHTML ="PUSH! NOTHING WON, NOTHING LOST."
		button[0].disabled = true
		button[1].disabled = true
		gameover = true
	}

}

for(i=0;i<6;i++)
{
	cardSpaceD[i].src = 'PNG\\frame.png'
	cardSpaceP[i].src = 'PNG\\frame.png'
}
gameplay()
