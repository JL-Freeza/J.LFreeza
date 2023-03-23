function generateBusinessName() {
	const subject = document.getElementById("subject").value;
	const prefixes = ["Tech", "Inno", "Smart", "Cyber", "Data", "Web", "Net", "Sys", "Soft", "Cloud"];
	const suffixes = ["Works", "Solutions", "Labs", "Tech", "Co", "Inc", "Net", "Group", "Media", "360"];
	const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
	const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
	document.getElementById("business-name").textContent = `${subject} ${prefix}${suffix}`;
}
