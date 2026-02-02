!function(){let{__:e}=wp.i18n,t={blockName:"core/media-text",variation:{name:"dude-media-text",title:e("Media & Text","air-light"),description:e("Media & Text block with Dude defaults","air-light"),isDefault:!0,attributes:{align:"wide",mediaPosition:"left",verticalAlignment:"center",mediaType:"image",mediaUrl:"https://airwptheme.com/placeholder.png",imageFill:!0,mediaWidth:50,style:{spacing:{padding:{top:"var:preset|spacing|30",bottom:"var:preset|spacing|30"},margin:{top:"var:preset|spacing|none",bottom:"var:preset|spacing|none"}}}},innerBlocks:[["core/heading",{level:2,content:e("Add a descriptive heading for your content here","air-light")}],["core/paragraph",{content:e('This is the media-text "Text part". You can write a paragraph here that tells more about the topic and helps the reader understand what this section is about. You can use multiple paragraphs if needed.',"air-light")}],["core/buttons",{},[["core/button",{text:e("Call to action","air-light")}]]]],scope:["inserter"]}};wp.domReady(()=>{let e=document.createElement("style");e.id="air-light-media-text-global",e.textContent=`
    /* Hide resizable box handle on the block itself */
    .wp-block-media-text .components-resizable-box__handle {
      display: none !important;
    }

    /* Hide alignment controls for media-text block */
    .wp-block-media-text.is-selected .block-editor-block-toolbar .block-editor-block-alignment-control {
      display: none !important;
    }
  `,document.head.appendChild(e);let t=document.createElement("style");t.id="air-light-media-text-conditional",document.head.appendChild(t),wp.data.subscribe(function(){let e=wp.data.select("core/block-editor").getSelectedBlock();e&&"core/media-text"===e.name?(t.textContent=`
        /* Hide typography panel for media-text block only */
        .typography-block-support-panel {
          display: none !important;
        }

        /* Hide gradient controls */
        .color-block-support-panel .components-circular-option-picker__swatches,
        .color-block-support-panel button[aria-label*="Gradient"],
        .color-block-support-panel button[aria-label*="gradient"],
        .color-block-support-panel .components-tab-panel__tabs button[id$="-gradient"] {
          display: none !important;
        }
      `,setTimeout(()=>{document.querySelectorAll(".components-base-control__label").forEach(e=>{if("Median leveys"===e.textContent||"Media width"===e.textContent){let t=e.closest(".components-tools-panel-item");t&&(t.style.display="none")}})},100)):t.textContent=""})});let o=[t];wp.domReady(()=>{o.forEach(({blockName:e,variation:t})=>{wp.blocks.registerBlockVariation(e,t)})}),wp.domReady(()=>{["amazon-kindle","animoto","bluesky","cloudup","crowdsignal","dailymotion","facebook","flickr","imgur","issuu","kickstarter","mixcloud","pinterest","pocket-casts","reddit","reverbnation","screencast","scribd","smugmug","soundcloud","speaker-deck","spotify","ted","tiktok","tumblr","twitter","videopress","vimeo","wolfram-cloud","wordpress","wordpress-tv","youtube"].forEach(e=>{wp.blocks.unregisterBlockVariation("core/embed",e)})})}();
//# sourceMappingURL=editor.js.map
