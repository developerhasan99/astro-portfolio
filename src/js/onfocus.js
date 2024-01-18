const projectSidebarLinks = document.querySelectorAll(".project-sidebar-link");

projectSidebarLinks.forEach((link) => {
	link.addEventListener("click", () => {
		link.classList.toggle("w--current");
	});
});
