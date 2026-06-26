# CLAUDE.md — Regras do Projeto mp-proverbios

## ⚠️ ARQUIVOS PROTEGIDOS — NÃO ALTERAR SEM AUTORIZAÇÃO EXPLÍCITA

Os arquivos abaixo são críticos para o rastreamento de conversões do Meta Ads.
**NUNCA modifique esses arquivos** durante ajustes de layout, design ou conteúdo.
Só altere se o usuário pedir explicitamente com o contexto de "rastreamento" ou "pixel".

### 🔴 Críticos — rastreamento Meta Pixel

| Arquivo | Por que é crítico |
|---|---|
| `index.html` | Contém o código base do Meta Pixel (PageView). Mover ou remover quebra todo o rastreamento. |
| `src/lib/pixel.ts` | Utilitário central de todos os eventos do pixel (ViewContent, InitiateCheckout, Purchase). |
| `src/components/CTAButton.tsx` | Repassa `fbclid` e UTMs para o checkout da Kiwify. Sem isso, compras não são atribuídas aos anúncios. |
| `src/components/StickyCTA.tsx` | Idem — também repassa fbclid/UTMs e dispara InitiateCheckout. |

### 🟡 Sensíveis — alterar com cuidado

| Arquivo | Cuidado com |
|---|---|
| `src/pages/Index.tsx` | Dispara `ViewContent` no `useEffect`. Não remover o import de `pixel`. |

---

## Configurações de rastreamento (referência)

- **Pixel ID Meta:** `26718632214483228`
- **Checkout URL:** `https://pay.kiwify.com.br/n09blri`
- **CAPI configurado em:** Kiwify → Produto → Configurações → Pixel
- **Domínio verificado no Meta:** `leticiafessel.com.br`

## Fluxo de eventos

```
Visita ao site     → PageView (index.html) + ViewContent (Index.tsx)
Clique no botão    → InitiateCheckout (CTAButton / StickyCTA) + fbclid repassado ao Kiwify
Compra confirmada  → Purchase via CAPI da Kiwify (server-side)
```

---

## Deploy

- Branch principal: `main`
- Deploy automático via GitHub Actions para `lp.leticiafessel.com.br` (Hostinger)
- Após push no `main`, aguardar ~2 min para o deploy concluir

## Testes de layout/design

- Criar sempre um branch separado (ex: `teste-vinho`, `ajuste-hero`)
- Nunca fazer testes direto no `main`
