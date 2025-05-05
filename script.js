// --- Theme Switch ---
const html = document.documentElement;
const themeSwitch = document.getElementById('themeSwitch');

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
function toggleTheme() {
    const current = html.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
}
themeSwitch.addEventListener('click', toggleTheme);

(function() {
    const saved = localStorage.getItem('theme');
    setTheme(saved === 'light' ? 'light' : 'dark');
})();

// ПОЛНЫЙ объект formulas:
const formulas = {
    geometry: {
        "5": [
            { title: "Периметр прямоугольника", text: "P = 2(a + b) <br><span class='explain'>где a, b — длины сторон</span>" },
            { title: "Площадь прямоугольника", text: "S = a × b <br><span class='explain'>где a и b — длины сторон</span>" },
            { title: "Площадь квадрата", text: "S = a² <br><span class='explain'>a — сторона квадрата</span>" },
            { title: "Периметр квадрата", text: "P = 4a" },
            { title: "Свойство диагоналей квадрата", text: "Диагонали равны, пересекаются под прямым углом и делят друг друга пополам." },
            { title: "Длина диагонали квадрата", text: "d = a√2" },
            { title: "Периметр треугольника", text: "P = a + b + c" },
            { title: "Площадь треугольника (основание и высота)", text: "S = ½ × a × h <br><span class='explain'>a — основание, h — высота</span>" },
            { title: "Периметр многоугольника", text: "P = сумма длин всех сторон" }
        ],
        "6": [
            { title: "Площадь параллелограмма", text: "S = a × h <br><span class='explain'>a — сторона, h — высота к этой стороне</span>" },
            { title: "Площадь треугольника (через две стороны и угол)", text: "S = ½ × a × b × sin(γ)" },
            { title: "Сумма углов треугольника", text: "Сумма углов любого треугольника равна 180°." },
            { title: "Виды треугольников", text: "Равносторонний (все стороны равны), равнобедренный (две стороны равны), разносторонний (все стороны разные)." },
            { title: "Площадь ромба", text: "S = a × h = (d₁ × d₂)/2 <br><span class='explain'>a — сторона, h — высота, d₁ и d₂ — диагонали</span>" },
            { title: "Площадь трапеции", text: "S = ½ × (a + b) × h <br><span class='explain'>a и b — основания, h — высота</span>" },
            { title: "Свойство средней линии трапеции", text: "Средняя линия трапеции параллельна основаниям и равна их полусумме: m = ½(a + b)" }
        ],
        "7": [
            { title: "Признак равенства треугольников (по двум сторонам и углу между ними)", text: "Если две стороны и угол между ними одного треугольника соответственно равны двум сторонам и углу между ними другого, то треугольники равны." },
            { title: "Признак равенства треугольников (по стороне и двум прилежащим углам)", text: "Если сторона и два прилежащих к ней угла одного треугольника равны стороне и двум прилежащим углам другого, то треугольники равны." },
            { title: "Признак равенства треугольников (по трём сторонам)", text: "Если три стороны одного треугольника равны трём сторонам другого, то треугольники равны." },
            { title: "Свойства равнобедренного треугольника", text: "Углы при основании равны; медиана, проведённая к основанию, является биссектрисой и высотой." },
            { title: "Свойство внешнего угла треугольника", text: "Внешний угол треугольника равен сумме двух внутренних углов, не смежных с ним." },
            { title: "Свойство средней линии треугольника", text: "Средняя линия треугольника параллельна одной из сторон и равна её половине." },
            { title: "Теорема о сумме углов многоугольника", text: "Сумма углов n-угольника: S = (n-2) × 180°" }
        ],
        "8": [
            { title: "Теорема Пифагора", text: "a² + b² = c² <br><span class='explain'>a, b — катеты, c — гипотенуза</span>" },
            { title: "Обратная теорема Пифагора", text: "Если для треугольника a² + b² = c², то он прямоугольный." },
            { title: "Площадь прямоугольного треугольника", text: "S = ½ × a × b" },
            { title: "Площадь круга", text: "S = πr² <br><span class='explain'>r — радиус</span>" },
            { title: "Длина окружности", text: "C = 2πr" },
            { title: "Площадь сектора", text: "S = (πr²α)/360°, где α — угол сектора в градусах" },
            { title: "Площадь сегмента круга", text: "S = S_сектора - S_треугольника" },
            { title: "Вписанная окружность треугольника", text: "r = S/p, где S — площадь, p — полупериметр" },
            { title: "Описанная окружность треугольника", text: "R = (abc)/(4S)" }
        ],
        "9": [
            { title: "Теорема синусов", text: "a/sinA = b/sinB = c/sinC <br><span class='explain'>a, b, c — стороны, A, B, C — противолежащие углы</span>" },
            { title: "Теорема косинусов", text: "c² = a² + b² - 2ab·cosC" },
            { title: "Площадь треугольника через синус угла", text: "S = ½ × a × b × sinC" },
            { title: "Формула Герона", text: "S = √[p(p-a)(p-b)(p-c)], где p = ½(a+b+c)" },
            { title: "Вписанная окружность", text: "r = S/p, где p — полупериметр" },
            { title: "Описанная окружность", text: "R = (abc)/(4S)" },
            { title: "Свойство биссектрисы", text: "Биссектриса делит противоположную сторону на отрезки, пропорциональные прилежащим сторонам." }
        ],
        "10": [
            { title: "Площадь поверхности призмы", text: "S_полн = 2S_осн + S_бок <br><span class='explain'>S_осн — площадь основания, S_бок — площадь боковой поверхности</span>" },
            { title: "Объем призмы", text: "V = S_осн × h" },
            { title: "Площадь боковой поверхности цилиндра", text: "S_бок = 2πrh" },
            { title: "Объем цилиндра", text: "V = πr²h" },
            { title: "Площадь полной поверхности цилиндра", text: "S_полн = 2πr(r + h)" },
            { title: "Площадь поверхности пирамиды", text: "S_полн = S_осн + S_бок" },
            { title: "Объем пирамиды", text: "V = (1/3)S_осн × h" }
        ],
        "11": [
            { title: "Объем шара", text: "V = (4/3)πr³" },
            { title: "Площадь поверхности шара", text: "S = 4πr²" },
            { title: "Объем усеченного конуса", text: "V = (1/3)πh(R² + Rr + r²)" },
            { title: "Площадь поверхности конуса", text: "S = πr(l + r), где l — образующая" },
            { title: "Объем конуса", text: "V = (1/3)πr²h" },
            { title: "Формула Эйлера для многогранников", text: "V - E + F = 2 <br><span class='explain'>V — число вершин, E — рёбер, F — граней</span>" }
        ]
    },
    algebra: {
        "5": [
            { title: "Сложение и вычитание", text: "a + b, a - b" },
            { title: "Умножение и деление", text: "a × b, a ÷ b" },
            { title: "Порядок действий", text: "1. Скобки<br>2. Степени и корни<br>3. Умножение и деление<br>4. Сложение и вычитание" },
            { title: "Свойства нуля", text: "a + 0 = a, a × 0 = 0, 0/a = 0 (a ≠ 0)" }
        ],
        "6": [
            { title: "Сложение дробей с одинаковыми знаменателями", text: "a/b + c/b = (a + c)/b" },
            { title: "Сравнение дробей", text: "a/b < c/d ⇔ ad < cb (при b, d > 0)" },
            { title: "Степень числа", text: "aⁿ = a × a × ... × a (n раз)" },
            { title: "Деление дробей", text: "a/b ÷ c/d = a/b × d/c" },
            { title: "Основное свойство дроби", text: "a/b = (a×k)/(b×k), k ≠ 0" }
        ],
        "7": [
            { title: "Линейное уравнение", text: "ax + b = 0 ⇒ x = -b/a" },
            { title: "Свойства степеней", text: "a^m × a^n = a^{m+n}<br>a^m / a^n = a^{m-n}" },
            { title: "Пропорция", text: "a/b = c/d ⇔ ad = bc" },
            { title: "Координатная прямая", text: "Точка O — начало отсчета, вправо — положительные, влево — отрицательные числа" },
            { title: "Свойство модуля", text: "|a| = a, если a ≥ 0; |a| = -a, если a < 0" }
        ],
        "8": [
            { title: "Квадратное уравнение", text: "ax² + bx + c = 0" },
            { title: "Дискриминант", text: "D = b² - 4ac" },
            { title: "Корни квадратного уравнения", text: "x₁,₂ = (-b ± √D)/(2a)" },
            { title: "Функция", text: "y = f(x). <br><span class='explain'>Функция — правило, по которому каждому x ставится в соответствие единственное значение y</span>" },
            { title: "Арифметическая прогрессия", text: "aₙ = a₁ + d(n-1)" },
            { title: "Сумма арифметической прогрессии", text: "Sₙ = (a₁ + aₙ)/2 × n" }
        ],
        "9": [
            { title: "Линейное неравенство", text: "ax + b > 0" },
            { title: "Система уравнений", text: "{ x + y = a; x - y = b }" },
            { title: "Формулы сокращённого умножения", text: "(a+b)² = a² + 2ab + b²<br>(a-b)² = a² - 2ab + b²<br>a² - b² = (a-b)(a+b)" },
            { title: "Куб суммы", text: "(a+b)³ = a³ + 3a²b + 3ab² + b³" },
            { title: "Куб разности", text: "(a-b)³ = a³ - 3a²b + 3ab² - b³" },
            { title: "Разность кубов", text: "a³ - b³ = (a-b)(a² + ab + b²)" },
            { title: "Сумма кубов", text: "a³ + b³ = (a+b)(a² - ab + b²)" }
        ],
        "10": [
            { title: "Логарифм", text: "logₐb = c ⇔ a^c = b" },
            { title: "Свойства логарифмов", text: "logₐ(xy) = logₐx + logₐy<br>logₐ(x/y) = logₐx - logₐy<br>logₐ(x^k) = k·logₐx" },
            { title: "Показательное уравнение", text: "a^x = b" },
            { title: "Геометрическая прогрессия", text: "bₙ = b₁ × q^{n-1}" },
            { title: "Сумма геометрической прогрессии", text: "Sₙ = b₁(1-q^n)/(1-q)" }
        ],
        "11": [
            { title: "Производная", text: "f'(x) = lim_{h→0} (f(x+h) - f(x))/h" },
            { title: "Основные производные", text: "(x^n)' = n·x^{n-1}<br>(sinx)' = cosx<br>(cosx)' = -sinx" },
            { title: "Интеграл", text: "∫f(x)dx" },
            { title: "Теорема Виета", text: "x₁ + x₂ = -b/a, x₁x₂ = c/a" },
            { title: "Основная теорема алгебры", text: "Каждый многочлен степени n > 0 имеет хотя бы один корень (в комплексных числах)." },
            { title: "Формула бинома Ньютона", text: "(a+b)^n = Σ_{k=0}^{n} C_n^k a^{n-k}b^k" }
        ]
    }
};




// Навигация между разделами
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const section = link.dataset.section;
        document.querySelectorAll('.subject-section').forEach(sec => sec.classList.remove('active-section'));
        document.getElementById(section).classList.add('active-section');
        document.querySelectorAll('.formulas-container').forEach(fc => fc.classList.remove('active'));
    });
});

// Показ формул по классу
document.querySelectorAll('.class-card').forEach(card => {
    card.addEventListener('click', function() {
        const parentSection = card.closest('.subject-section');
        const subject = parentSection.id;
        const classNum = card.dataset.class;
        const formulasBlock = parentSection.querySelector('.formulas-container');
        formulasBlock.innerHTML = '';
        if (formulas[subject] && formulas[subject][classNum]) {
            const ul = document.createElement('ul');
            ul.className = 'formula-list';
            formulas[subject][classNum].forEach((f, idx) => {
                const li = document.createElement('li');
                li.style.animationDelay = (0.16 + idx * 0.08) + 's';
                li.innerHTML = `<span class="formula-title">${f.title}</span><br>${f.text}`;
                ul.appendChild(li);
            });
            formulasBlock.appendChild(ul);
            formulasBlock.classList.add('active');
            formulasBlock.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
});
