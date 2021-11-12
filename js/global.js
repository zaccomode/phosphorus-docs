// TEMP BEHAVIOURS
function updateWordCount() {
    let textInfo = getText('ph-text-1');

    document.getElementById('text-word-count').innerHTML = textInfo.html.querySelector('input').value.length + '/' + textInfo.maxLength;
}

function checkFile() {
    console.log(getFileUploadInfo(0));
}

function createAlert() {
    let alert = new Ph_Alert({
        title: 'Sample alert title', 
        text: 'Sample alert content'
    });
    alert.instantiate();
}
function createModal() {
    let modal = new Ph_Modal({headerText: 'Sample Modal'});
    modal.instantiate();
}

function openDrawer() {
    let drawer = getMobileDrawer(0);
    drawer.show();
}

function objectInteraction() {
    let text = getText(1);
    let checkContainer = new Ph_CheckContainer({
        checks: [
            new Ph_Check({ label: 'Label 1' }),
            new Ph_Check({ label: 'Label 2' }),
            new Ph_Check({ label: 'Label 3' })
        ], 
        parent: text.parent
    });
    checkContainer.instantiate();
}