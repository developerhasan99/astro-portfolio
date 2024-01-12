import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
	siJavascript,
	siNextdotjs,
	siBootstrap,
	siCss3,
	siExpress,
	siGit,
	siGithub,
	siHtml5,
	siLess,
	siSass,
	siLinux,
	siMaterialdesign,
	siMongodb,
	siMysql,
	siNodedotjs,
	siPhp,
	siPhpmyadmin,
	siReact,
	siTailwindcss,
	siWordpress,
	siAstro,
	siFontawesome,
	siYarn,
	siShadcnui,
} from "simple-icons";

const icons = [
	siAstro,
	siFontawesome,
	siYarn,
	siShadcnui,
	siJavascript,
	siNextdotjs,
	siBootstrap,
	siCss3,
	siExpress,
	siGit,
	siGithub,
	siHtml5,
	siLess,
	siSass,
	siLinux,
	siMongodb,
	siMysql,
	siPhp,
	siReact,
	siTailwindcss,
	siWordpress,
	siMaterialdesign,
	siNodedotjs,
	siPhpmyadmin,
].map((icon) => {
	return renderSimpleIcon({
		icon,
		size: 100,
		aProps: {
			onClick: (e) => e.preventDefault(),
		},
	});
});

function TechLogos() {
	return <Cloud id="tech-logos-canvas">{icons}</Cloud>;
}

export default TechLogos;
