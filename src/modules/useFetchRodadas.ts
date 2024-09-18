export const fetchRodadas = async () => {
  try {
    const response = await fetch('https://sevn-pleno-esportes.deno.dev/')

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error to find the API:', error)
    return null
  }
}
