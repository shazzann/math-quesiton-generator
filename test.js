const text = '<div>\\(\\sqrt[3]{216}\\)</div>';
let s = text;
s = s.replace(/\\\(/g, '');
s = s.replace(/\\\)/g, '');
s = s.replace(/\\sqrt\[([^\]]*)\]\{([^}]*)\}/g, '<sup>$1</sup>√($2)');
console.log(s);
