// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="intro.html"><strong aria-hidden="true">1.</strong> Intro</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="HW.html"><strong aria-hidden="true">1.1.</strong> Choosing Hardware</a></li><li class="chapter-item expanded "><a href="Install.html"><strong aria-hidden="true">1.2.</strong> Install Blender</a></li><li class="chapter-item expanded "><a href="Shortcuts.html"><strong aria-hidden="true">1.3.</strong> Shortcuts</a></li></ol></li><li class="chapter-item expanded "><a href="U1.html"><strong aria-hidden="true">2.</strong> Unit 1</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="history.html"><strong aria-hidden="true">2.1.</strong> History of Blender</a></li><li class="chapter-item expanded "><a href="foss.html"><strong aria-hidden="true">2.2.</strong> FOSS</a></li><li class="chapter-item expanded "><a href="3dg.html"><strong aria-hidden="true">2.3.</strong> 3D Graphics Concepts</a></li><li class="chapter-item expanded "><a href="uio.html"><strong aria-hidden="true">2.4.</strong> Interface Overview</a></li><li class="chapter-item expanded "><a href="vpn.html"><strong aria-hidden="true">2.5.</strong> Viewport Navigation</a></li><li class="chapter-item expanded "><a href="sat.html"><strong aria-hidden="true">2.6.</strong> Selection &amp; Transormation</a></li><li class="chapter-item expanded "><a href="sbm.html"><strong aria-hidden="true">2.7.</strong> Side Bar Menu</a></li><li class="chapter-item expanded "><a href="tbm.html"><strong aria-hidden="true">2.8.</strong> Tool Bar Menu</a></li><li class="chapter-item expanded "><a href="aar.html"><strong aria-hidden="true">2.9.</strong> Adding &amp; Removing Objects</a></li><li class="chapter-item expanded "><a href="outliner.html"><strong aria-hidden="true">2.10.</strong> The Outliner</a></li><li class="chapter-item expanded "><a href="aaw.html"><strong aria-hidden="true">2.11.</strong> Areas &amp; Windows</a></li><li class="chapter-item expanded "><a href="et.html"><strong aria-hidden="true">2.12.</strong> Editor Types</a></li><li class="chapter-item expanded "><a href="emt.html"><strong aria-hidden="true">2.13.</strong> Edit Mode Toolbar</a></li><li class="chapter-item expanded "><a href="u1hw.html"><strong aria-hidden="true">2.14.</strong> Homework</a></li></ol></li><li class="chapter-item expanded "><a href="U2.html"><strong aria-hidden="true">3.</strong> Unit 2</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bincyl.html"><strong aria-hidden="true">3.1.</strong> Cylinder</a></li><li class="chapter-item expanded "><a href="binflare.html"><strong aria-hidden="true">3.2.</strong> Flaring Ends</a></li><li class="chapter-item expanded "><a href="bincylpos.html"><strong aria-hidden="true">3.3.</strong> Position offset</a></li><li class="chapter-item expanded "><a href="binmirrorempty.html"><strong aria-hidden="true">3.4.</strong> Adding mirroring empty</a></li><li class="chapter-item expanded "><a href="binmirrorparent.html"><strong aria-hidden="true">3.5.</strong> Parenting empty</a></li><li class="chapter-item expanded "><a href="binsubd1.html"><strong aria-hidden="true">3.6.</strong> Apply Sub-Division Modifier</a></li><li class="chapter-item expanded "><a href="binies.html"><strong aria-hidden="true">3.7.</strong> Insetting, Extruding, Scaling Cylinder Ends</a></li><li class="chapter-item expanded "><a href="binapplyscale.html"><strong aria-hidden="true">3.8.</strong> Applying Object Scale</a></li><li class="chapter-item expanded "><a href="binloopcuts.html"><strong aria-hidden="true">3.9.</strong> Applying Loop Cuts</a></li><li class="chapter-item expanded "><a href="binbevels.html"><strong aria-hidden="true">3.10.</strong> Applying Bevels</a></li><li class="chapter-item expanded "><a href="bincontsel.html"><strong aria-hidden="true">3.11.</strong> Contiguous Selection / De-Selection</a></li><li class="chapter-item expanded "><a href="bindupsurf.html"><strong aria-hidden="true">3.12.</strong> Duplicating &amp; Seperating Surfaces</a></li><li class="chapter-item expanded "><a href="binthrucut.html"><strong aria-hidden="true">3.13.</strong> Knife Tool Cuts</a></li><li class="chapter-item expanded "><a href="biniso.html"><strong aria-hidden="true">3.14.</strong> Isolating Objects</a></li><li class="chapter-item expanded "><a href="binsolidify.html"><strong aria-hidden="true">3.15.</strong> Applying the Solidify Modifier</a></li><li class="chapter-item expanded "><a href="bingrip.html"><strong aria-hidden="true">3.16.</strong> Extracting the grip</a></li><li class="chapter-item expanded "><a href="binmaterials.html"><strong aria-hidden="true">3.17.</strong> Creating Materials</a></li><li class="chapter-item expanded "><a href="binapplymat.html"><strong aria-hidden="true">3.18.</strong> Applying Materials</a></li><li class="chapter-item expanded "><a href="bingroupname.html"><strong aria-hidden="true">3.19.</strong> Grouping &amp; Naming</a></li><li class="chapter-item expanded "><a href="binlighting.html"><strong aria-hidden="true">3.20.</strong> Lighting</a></li><li class="chapter-item expanded "><a href="bincam.html"><strong aria-hidden="true">3.21.</strong> Camera Placement</a></li><li class="chapter-item expanded "><a href="binrendersetup.html"><strong aria-hidden="true">3.22.</strong> Render Setup</a></li><li class="chapter-item expanded "><a href="binrender.html"><strong aria-hidden="true">3.23.</strong> Final Render</a></li><li class="chapter-item expanded "><a href="binresources.html"><strong aria-hidden="true">3.24.</strong> Resources</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
