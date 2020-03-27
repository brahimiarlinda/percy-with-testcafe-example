import percySnapshot from '@percy/testcafe';

fixture `Zerobank UI-Snapshot Testing`
    .page `http://zero.webappsecurity.com/index.html`;

test ('Zerobank Landingpage', async t => {
    await t.wait(1000);
    await percySnapshot(t, 'Landingpage');
});