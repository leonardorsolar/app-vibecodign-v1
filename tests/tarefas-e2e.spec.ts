import { test, expect } from "@playwright/test"

test("adicionar tarefa e exibir na lista", async ({ page }) => {
    await page.goto("/")

    // Limpa o localStorage para garantir ambiente limpo
    await page.evaluate(() => localStorage.clear())

    // Digita o título da tarefa
    await page.getByTestId("input-tarefa").fill("Minha primeira tarefa")
    // Clica no botão de adicionar
    await page.getByTestId("btn-adicionar").click()

    // Verifica se o título da tarefa aparece na lista
    const titulos = await page.getByTestId("titulo-tarefa").allTextContents()
    expect(titulos).toContain("Minha primeira tarefa")
})
