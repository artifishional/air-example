import { ModelVertex, HTMLView } from 'air-m2';

const entry = document.currentScript.getAttribute('data-entry-unit') || 'master';

const modelschema = ModelVertex
  .createApplicationRoot({ path: entry });

function documentOnLoadHandler() {
    HTMLView
      .createApplicationRoot({ path: entry })
      .obtain('', {}, { modelschema })
      .get(([{ target }]) => {
          console.info('complete');
          document.body.append(target);
      });
}

window.document &&
window.document.readyState === 'complete' && documentOnLoadHandler() ||
window.addEventListener('DOMContentLoaded', documentOnLoadHandler);