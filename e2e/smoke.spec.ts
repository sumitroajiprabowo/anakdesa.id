import { test, expect } from '@playwright/test'

test.describe('anakdesa.id smoke tests', () => {
  test('homepage loads with all sections', async ({ page }) => {
    await page.goto('/')

    // Navbar visible
    await expect(page.getByRole('navigation')).toBeVisible()

    // Hero headline
    await expect(page.getByText('Suara Desa')).toBeVisible()

    // Stats section
    await expect(page.getByText('Subscriber')).toBeVisible()

    // Karya section
    await expect(page.getByText(/Karya Pilihan/i)).toBeVisible()

    // Channel section
    await expect(page.locator('#channel')).toBeVisible()

    // Layanan section
    await expect(page.getByText(/Apa yang Kami/i)).toBeVisible()

    // Cara Kerja section
    await expect(page.getByText(/Cara Kerja/i)).toBeVisible()

    // Mitra section
    await expect(page.getByText(/Pernah Berkolaborasi/i)).toBeVisible()

    // CTA section
    await expect(page.locator('#kontak')).toBeVisible()

    // Footer
    await expect(page.getByText(/© 2026/)).toBeVisible()
  })

  test('navigation links point to page sections', async ({ page }) => {
    await page.goto('/')

    const nav = page.getByRole('navigation')
    const links = nav.locator('a[href^="#"]')
    const count = await links.count()

    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href')
      if (href && href !== '#') {
        const target = page.locator(href)
        await expect(target).toBeAttached()
      }
    }
  })

  test('external links have target _blank', async ({ page }) => {
    await page.goto('/')

    const externalLinks = page.locator('a[href^="https://"]')
    const count = await externalLinks.count()

    for (let i = 0; i < count; i++) {
      const target = await externalLinks.nth(i).getAttribute('target')
      const href = await externalLinks.nth(i).getAttribute('href')
      // WhatsApp and social links should open in new tab
      if (href?.includes('wa.me') || href?.includes('youtube') || href?.includes('instagram')) {
        expect(target).toBe('_blank')
      }
    }
  })

  test('meta tags are present', async ({ page }) => {
    await page.goto('/')

    // Title
    const title = await page.title()
    expect(title).toContain('Anak Desa')

    // OG tags
    const ogTitle = page.locator('meta[property="og:title"]')
    await expect(ogTitle).toHaveAttribute('content', /Anak Desa/)

    const ogImage = page.locator('meta[property="og:image"]')
    await expect(ogImage).toHaveAttribute('content', /og-image/)

    // Twitter card
    const twCard = page.locator('meta[name="twitter:card"]')
    await expect(twCard).toHaveAttribute('content', 'summary_large_image')
  })

  test('page is responsive on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile only')
    await page.goto('/')

    // Hamburger button visible on mobile
    const hamburger = page.getByLabel(/menu/i)
    await expect(hamburger).toBeVisible()
  })
})
