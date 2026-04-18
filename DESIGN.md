# Design System Document: Cinematic Authority

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Juris"**
This design system rejects the cluttered, utilitarian aesthetic of traditional legal platforms in favor of a high-end, cinematic editorial experience. It is designed to feel like a private gallery or a prestigious law chambers at midnight—authoritative, quiet, and profoundly focused. 

The system breaks the "template" look by utilizing **Extreme Negative Space** and **Intentional Asymmetry**. We do not fill the screen; we curate it. By removing navigation menus, we force a linear, narrative-driven journey that mimics the deliberate pace of legal mastery. Visual interest is generated not through decoration, but through the tension between massive, bold typography and vast expanses of deep black.

---

## 2. Colors
The palette is rooted in absolute darkness, using tonal shifts rather than lines to define the architecture of the page.

*   **Background (`#131313`):** A deep, ink-black base that absorbs light and provides the "cinematic" canvas.
*   **Primary (`#ceced0`):** A soft, metallic silver-white used for core readability.
*   **Secondary/Highlight (`#e9c349`):** Our "Sovereign Gold." Used sparingly to draw the eye to critical actions or "verdicts."

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px borders are strictly prohibited for sectioning or containment. Boundaries must be defined solely through background color shifts. Use `surface-container-low` sections against the `background` to create a "paving" effect. The eye should perceive change through value, not outlines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
*   **Layer 0 (Base):** `surface` (#131313)
*   **Layer 1 (Sectioning):** `surface-container-low` (#1b1b1b)
*   **Layer 2 (Interactive Elements):** `surface-container-highest` (#353535)

### The "Glass & Gold" Rule
To elevate beyond flat design, main Call-to-Actions should utilize a subtle gradient transition from `secondary` (#e9c349) to `secondary-container` (#af8d11). For floating instructional overlays, use **Glassmorphism**: `surface-container` colors at 60% opacity with a `24px` backdrop-blur to maintain the "noir" atmosphere while creating depth.

---

## 3. Typography
The typography is the primary visual "hero" of the system. It conveys authority through scale and breathability.

*   **Display-LG (140px / Inter Tight Bold):** Used for chapter beginnings and monumental statements. Letter-spacing should be set to `-0.04em` to create a tight, architectural feel.
*   **Headlines (Inter Tight Bold):** These act as anchors. Always paired with extreme top-margin to signal a transition in the curriculum.
*   **Body (Inter Light):** Set at a spacious `1.8 line-height`. The light weight on a dark background prevents "haloing" and ensures a luxurious, easy-to-read flow.
*   **Labels (Inter Medium All-Caps):** Used for metadata (e.g., "MODULE 01"). Increase letter-spacing to `0.2em` to evoke premium watchmaking or fashion branding.

---

## 4. Elevation & Depth
In this system, depth is "felt" rather than "seen." 

### The Layering Principle
Depth is achieved by stacking surface-tier tokens. Place a `surface-container-lowest` card on top of a `surface-container-low` section. This creates a natural, soft "lift" that mimics the way light falls on matte paper.

### Ambient Shadows
Shadows are rarely used, but when necessary for "floating" action buttons:
*   **Blur:** 60px+
*   **Opacity:** 4-6%
*   **Color:** Use a tinted shadow (sampling the `on-surface` color) rather than pure black to keep the shadows from feeling "dirty."

### The "Ghost Border" Fallback
If a visual separator is required for accessibility (e.g., input fields), use the **Ghost Border**: the `outline-variant` token at **15% opacity**. It should be felt as a whisper, never a loud boundary.

---

## 5. Components

### Buttons
*   **Primary:** Sharp 0px corners. Background: `secondary` (#e9c349). Text: `on-secondary` (#3c2f00). No border.
*   **Tertiary:** Text-only in `primary` white with a `secondary` gold underline that appears only on hover.
*   **Sizing:** Over-sized padding (24px 48px) to emphasize the premium nature of the choice.

### Cards & Lists
*   **Rule:** Forbid the use of divider lines. 
*   **Execution:** Separate list items with `32px` of vertical whitespace. For cards, use a subtle shift to `surface-container-high` on hover to indicate interactivity.

### Input Fields
*   **Style:** Underline only (Ghost Border style). No background fill. 
*   **Focus State:** The underline transforms into the `secondary` gold color with a `0px` transition for an immediate, authoritative response.

### Signature Component: The "Progress Monolith"
Instead of a standard progress bar, use a vertical, ultra-thin line (2px) on the far right of the screen using `outline-variant`. The "active" portion is `secondary` gold. This maintains the "no-nav" minimalist philosophy.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Align text to the left but leave the right 40% of the screen entirely empty.
*   **Use 0px Radii:** Every corner must be sharp. Rounded corners feel "friendly"; sharp corners feel "sovereign."
*   **Monochromatic Base:** Keep 95% of the UI in the black/grey/white spectrum. Save gold only for the "Moment of Truth."

### Don't:
*   **No Standard Grids:** Avoid 12-column layouts that feel like a bootstrap template. Use a "Golden Ratio" offset instead.
*   **No Icons in Buttons:** Trust the typography. A button should say "ENTER" or "PROCEED," not use a generic arrow icon.
*   **No Navbars:** The user should never feel like they are in a "website." They are in a masterclass. Navigation is handled via sequential "Continue" actions or a discrete "Esc" overlay.

### Accessibility Note:
While the design is "Noir," ensure all `primary` text on `surface` backgrounds maintains a contrast ratio of at least 7:1. The "Ghost Borders" should be used for interactive hitboxes to ensure users with low motor control can clearly identify active zones.