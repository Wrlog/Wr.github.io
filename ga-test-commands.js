// ============================================
// GOOGLE ANALYTICS VERIFICATION TEST
// Copy and paste ALL of this into Console tab
// ============================================

console.log('\n🔍 GOOGLE ANALYTICS TEST STARTING...\n');
console.log('='.repeat(50));

// Test 1: Check if gtag function exists
console.log('\n1️⃣ Testing gtag function...');
if (typeof gtag === 'function') {
    console.log('✅ SUCCESS: gtag function is loaded!');
} else {
    console.log('❌ ERROR: gtag function NOT found!');
    console.log('   This means Google Analytics is NOT loaded.');
}

// Test 2: Check dataLayer
console.log('\n2️⃣ Testing dataLayer...');
if (window.dataLayer && Array.isArray(window.dataLayer)) {
    console.log('✅ SUCCESS: dataLayer exists!');
    console.log('   Items in dataLayer:', window.dataLayer.length);
    console.log('   dataLayer contents:', window.dataLayer);
} else {
    console.log('❌ ERROR: dataLayer NOT found!');
}

// Test 3: Check if script tag exists in HTML
console.log('\n3️⃣ Testing GA script tag in HTML...');
const gaScript = document.querySelector('script[src*="googletagmanager"]');
if (gaScript) {
    console.log('✅ SUCCESS: Google Analytics script tag found!');
    console.log('   Script source:', gaScript.src);
    
    // Extract GA ID from script src
    const match = gaScript.src.match(/id=([^&]+)/);
    if (match) {
        console.log('   Tracking ID:', match[1]);
    }
} else {
    console.log('❌ ERROR: Google Analytics script tag NOT found!');
    console.log('   The code may not be deployed yet.');
}

// Test 4: Check for GA configuration
console.log('\n4️⃣ Testing GA configuration...');
const configItem = window.dataLayer?.find(item => item && item[0] === 'config');
if (configItem && configItem[1]) {
    console.log('✅ SUCCESS: GA configuration found!');
    console.log('   Tracking ID:', configItem[1]);
} else {
    console.log('⚠️  WARNING: Could not find GA config in dataLayer');
}

// Test 5: Check Network requests
console.log('\n5️⃣ Network Request Check:');
console.log('   📋 Go to Network tab → Filter by "gtag" → Reload page');
console.log('   You should see requests to:');
console.log('   - googletagmanager.com/gtag/js?id=G-7WJEV91PM7');
console.log('   - google-analytics.com/g/collect?...');

// Final Summary
console.log('\n' + '='.repeat(50));
console.log('📊 SUMMARY:');
const allTests = [
    typeof gtag === 'function',
    window.dataLayer && Array.isArray(window.dataLayer),
    !!gaScript,
    !!configItem
];

const passedTests = allTests.filter(Boolean).length;
console.log(`   Tests passed: ${passedTests}/4`);

if (passedTests === 4) {
    console.log('   ✅ ALL TESTS PASSED! Google Analytics is working correctly!');
} else if (passedTests > 0) {
    console.log('   ⚠️  SOME TESTS FAILED. Google Analytics may be partially working.');
} else {
    console.log('   ❌ ALL TESTS FAILED. Google Analytics is NOT working.');
    console.log('   💡 Make sure:');
    console.log('      1. Changes have been pushed to GitHub');
    console.log('      2. GitHub Pages has finished rebuilding (wait 2-5 min)');
    console.log('      3. You reloaded the page after opening DevTools');
}

console.log('\n' + '='.repeat(50) + '\n');







