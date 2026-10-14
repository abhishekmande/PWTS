import {test,expect} from '@playwright/test';
import path from 'path';

test('file upload test case',async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['testdata/Screenshot 2026-07-16 222912.png','testdata/Screenshot 2026-07-16 223038.png']);

    await expect(page.locator('#fileList li').first()).toContainText('Screenshot 2026-07-16 222912.png');
    await expect(page.locator('#fileList li').last()).toContainText('Screenshot 2026-07-16 223038.png');

    console.log(process.cwd());

})