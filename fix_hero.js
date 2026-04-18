const fs = require('fs');
let c = fs.readFileSync('e:/ANTIGRAVITY/rulli/stitch_landing_page/index.html', 'utf8');
const marker = 'price-hint reveal';
const idx = c.indexOf(marker);
const closeSeq = '      </div>\n    </div>\n  </section>';
const closeIdx = c.indexOf(closeSeq, idx);
if (closeIdx === -1) { console.log('NOT FOUND'); process.exit(1); }
const replacement = '      </div>\n      </div>\n    </div>\n  </section>';
c = c.slice(0, closeIdx) + replacement + c.slice(closeIdx + closeSeq.length);
fs.writeFileSync('e:/ANTIGRAVITY/rulli/stitch_landing_page/index.html', c, 'utf8');
console.log('DONE - inserted missing div at index', closeIdx);
