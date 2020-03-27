import percySnapshot from '@percy/testcafe';

fixture `Visual Regreassion Test with Percy`
    .page `https://www.example.com`;

test ('Percy Demo - Example Page', async t => {
    await t.wait(1000);
    await percySnapshot(t, 'Example Page');
});