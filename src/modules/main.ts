import { fetchRodadas } from './useFetchRodadas'

const data = await fetchRodadas()

const currentRoundIndex = 0

const currentRoundTitle = document.getElementById('current-round')!
const roundsTable = document.getElementById('rounds-table')!
const prevBtn = document.getElementById('prevRound')! as HTMLButtonElement
const nextBtn = document.getElementById('nextRound')! as HTMLButtonElement

async function renderRound() {
  if (data) {
    const round = data[currentRoundIndex]
    console.log({ round })

    currentRoundTitle.textContent = `RODADA ${round.round}`
    roundsTable.innerHTML = ''

    round.games.forEach((game) => {
      const gameElement = document.createElement('li')
      gameElement.classList.add('game')

      gameElement.innerHTML = `
      <img src="/public/images/${game.team_home_id}.png" alt="${game.team_home_name}">
      <span class="team-name">${game.team_home_name}</span>
      <span class="score">${game.team_home_score}</span>
      <span class="vs">X</span>
      <span class="score">${game.team_away_score}</span>
      <span class="team-name">${game.team_away_name}</span>
      <img src="/public/images/${game.team_away_id}.png" alt="${game.team_away_name}">
    `

      roundsTable.appendChild(gameElement)
    })

    prevBtn.disabled = currentRoundIndex === 0
    nextBtn.disabled = currentRoundIndex === data.length - 1
  }
}

renderRound()
