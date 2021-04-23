import sass from "node-sass";
import fs from "fs";

export const compileSass = () => {
	sass.render(
		{
			file: __dirname.replace("/lib", "/scss/main.scss"),
			outFile: __dirname.replace("/src/lib", "/public/css/") + "style.min.css",
			outputStyle: "compressed",
			sourceMap: false,
		},
		(err, result) => {
			if (err) {
				console.log("sass is not getting complied");
				console.log(err);
			} else {
				fs.writeFile(
					__dirname.replace("/src/lib", "/public/css/") + "style.min.css",
					result.css,
					(err) => {
						if (!err) {
							console.log("scss is complied to css");
						} else {
							console.log(err);
						}
					}
				);
			}
		}
	);
};
