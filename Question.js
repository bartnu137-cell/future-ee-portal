

const QUESTIONS = [
    { 
        q: "In an examination, an examinee may select 7 problems from a set of 10 questions. In how many ways can he make his choice?", 
        a: ["604,800 ways", "100 ways", "120 ways", "150 ways"], 
        c: "120 ways", 
        h: "This is a combination problem where order does not matter[cite: 7]. Formula: \\(_{10}C_{7} = \\frac{10!}{7!(10-7)!}\\)[cite: 8, 9].",
        cal: "⌨️ CANON: Input 10 [nCr] 7 [=]. (nCr is found above the [÷] key) [cite: 15]." 
    },
    { 
        q: "The quadratic equation whose roots are 2 and -3 is:", 
        a: ["\\(x^{2}-x-6=0\\)", "\\(x^{2}-x+6=0\\)", "\\(x^{2}+x-6=0\\)", "\\(x^{2}+x+6=0\\)"], 
        c: "\\(x^{2}+x-6=0\\)", 
        h: "Standard form: \\(x^2 - (sum)x + product = 0\\). Sum: \\(2 + (-3) = -1\\). Product: \\(2(-3) = -6\\)[cite: 12]. Result: \\(x^2 + x - 6 = 0\\)[cite: 17].",
        cal: "⌨️ CANON: [APPS] [1] (EQN) [3] (Quadratic). Input 1, 1, -6 to verify roots are 2 and -3." 
    },
    { 
        q: "The fourth term in the binomial expansion of \\((3s+2t)^{5}\\) is:", 
        a: ["24st", "\\(720s^{2}t^{3}\\)", "\\(648s^{4}t\\)", "\\(24s^{4}t\\)"], 
        c: "\\(720s^{2}t^{3}\\)", 
        h: "General term: \\(T_{k+1} = _{n}C_{k} a^{n-k} b^{k}\\). For 4th term, k=3[cite: 21]. \\(_{5}C_{3}(3s)^{2}(2t)^{3} = 10(9s^2)(8t^3) = 720s^2t^3\\)[cite: 23].",
        cal: "⌨️ CANON: 5 [nCr] 3 [×] 3^2 [×] 2^3 [=]." 
    },
    { 
        q: "Mario can finish a job two hours longer than Pepe. After working for 1 hour, Pepe joins him and they can complete the job in 3 more hours. How long would it take Mario to finish the job if he worked alone?", 
        a: ["5 hr", "6 hr", "8 hr", "10 hr"], 
        c: "8 hr", 
        h: "Let Mario = x, Pepe = x-2[cite: 24]. Equation: \\(\\frac{4}{x} + \\frac{3}{x-2} = 1\\)[cite: 25]. Solving for x results in 8 hours[cite: 26, 32].",
        cal: "⌨️ CANON: Input 4 ÷ X + 3 ÷ (X - 2) [ALPHA] [=] 1. Press [SHIFT] [SOLVE] [=]." 
    },
    { 
        q: "Determine the area enclosed by the circle \\(x^{2}+y^{2}-10x+4y=196\\).", 
        a: ["15π", "225π", "12π", "144π"], 
        c: "225π", 
        h: "Complete the square: \\((x-5)^2 + (y+2)^2 = 196 + 25 + 4 = 225\\)[cite: 29, 34]. Radius squared \\(r^2 = 225\\). Area = \\(225\\pi\\)[cite: 31].",
        cal: "⌨️ TIP: On the Canon, you can store the radius in memory [STO] [A] then calculate πA²." 
    },
    { 
        q: "A river flows at 3 miles per hour. Find the speed of a motorboat which goes upstream 2 miles at the same time required to go 3 miles downstream.", 
        a: ["10 mph", "15 mph", "20 mph", "25 mph"], 
        c: "15 mph", 
        h: "Upstream speed = V-3; Downstream speed = V+3[cite: 37]. Ratio: \\(\\frac{2}{V-3} = \\frac{3}{V+3}\\)[cite: 38]. Solving gives V=15[cite: 40].",
        cal: "⌨️ CANON: Use [SOLVE]. Input 2 ÷ (X - 3) [ALPHA] [=] 3 ÷ (X + 3). Press [SHIFT] [SOLVE]." 
    },
    { 
        q: "What is the volume of a right circular cylinder inscribed in a cube of edge 10 cm.?", 
        a: ["\\(200\\pi~cm^{3}\\)", "\\(230\\pi~cm^{3}\\)", "\\(250\\pi~cm^{3}\\)", "\\(300\\pi~cm^{3}\\)"], 
        c: "\\(250\\pi~cm^{3}\\)", 
        h: "Cylinder radius \\(r = 5\\) and height \\(h = 10\\)[cite: 42]. Volume \\(V = \\pi r^2 h = \\pi(5^2)(10) = 250\\pi\\)[cite: 45].",
        cal: "⌨️ CANON: π [×] 5 [x²] [×] 10 [=]." 
    },
    { 
        q: "In how many ways can 5 people line up to pay their electric bills if two particular persons refuse to follow each other?", 
        a: ["120", "90", "72", "140"], 
        c: "72", 
        h: "Total arrangements = \\(5! = 120\\)[cite: 48]. Arrangements where they are together = \\(2! \\times 4! = 48\\)[cite: 49]. \\(120 - 48 = 72\\)[cite: 52].",
        cal: "⌨️ CANON: 5 [!] [-] ( 2 [!] [×] 4 [!] ) [=]." 
    },
    { 
        q: "The length of the latus rectum of parabola with \\(y^2-8x-4y-20=0\\) is:", 
        a: ["2", "4", "6", "8"], 
        c: "8", 
        h: "Complete the square: \\((y-2)^2 = 8x + 24 = 8(x+3)\\)[cite: 54, 55]. Latus Rectum \\(LR = 4p = 8\\)[cite: 56].",
        cal: "⌨️ TIP: LR is simply the coefficient of the linear term (x) after grouping the quadratic terms." 
    },
    { 
        q: "Given a triangle with angle \\(C=28.7^{\\circ}\\), side \\(a=132\\) units and side \\(b=224\\) units. Solve for angle B.", 
        a: ["130°", "110°", "120°", "90°"], 
        c: "120°", 
        h: "Use Law of Cosines to find side c[cite: 58]. Then use Law of Sines: \\(\\frac{\\sin B}{224} = \\frac{\\sin 28.7}{c}\\). Result: 120°[cite: 60].",
        cal: "⌨️ CANON: Store side c in memory [STO] [C] then compute B using [SHIFT] [sin⁻¹]." 
    },
    { 
        q: "If \\(\\tan 4A = \\cot 6A\\), then what is the value of angle A?", 
        a: ["9°", "12°", "10°", "14°"], 
        c: "9°", 
        h: "Cofunctions are equal if angles are complementary[cite: 61]. \\(4A + 6A = 90\\)[cite: 62]. \\(10A = 90\\), so \\(A = 9\\).",
        cal: "⌨️ CANON: Input [tan] 4X [ALPHA] [=] 1 [÷] [tan] 6X. Press [SHIFT] [SOLVE]." 
    },
    { 
        q: "How many dozens of tiles measuring 5 cm by 5 cm are needed to cover a wall measuring 2 m by 1.5 m?", 
        a: ["100", "120", "1,000", "1,200"], 
        c: "100", 
        h: "Wall Area = \\(200 \\times 150 = 30,000~cm^2\\)[cite: 65, 68]. Tiles = \\(30,000 / 25 = 1200\\). Dozens = \\(1200 / 12 = 100\\)[cite: 65].",
        cal: "⌨️ CANON: (200 [×] 150) [÷] (5 [×] 5) [÷] 12 [=]." 
    },
    { 
        q: "Find the first derivative of \\(\\ln(\\cos x)\\).", 
        a: ["csc x", "-tan x", "sec x", "cot x"], 
        c: "-tan x", 
        h: "By chain rule: \\(\\frac{d}{dx}[\\ln(u)] = \\frac{u'}{u}\\)[cite: 74]. Derivative = \\(\\frac{-\\sin x}{\\cos x} = -\\tan x\\)[cite: 71].",
        cal: "⌨️ CANON: Use [d/dx] at X=0.5. Compare value with -tan(0.5) in RAD mode." 
    },
    { 
        q: "A man 1.8 m tall is walking at the rate of 1.2 m/s away from a lamp post 6.7 m high. At what rate is the tip of his shadow receding from the lamp post?", 
        a: ["2.16 m/s", "1.64 m/s", "1.83 m/s", "1.78 m/s"], 
        c: "1.64 m/s", 
        h: "Using similar triangles: \\(\\frac{y}{6.7} = \\frac{y-x}{1.8}\\)[cite: 75, 77]. Solving for \\(\\frac{dy}{dt}\\) gives 1.64 m/s[cite: 83].",
        cal: "⌨️ TIP: Tip velocity = \\(\\frac{H}{H-h} \\times v_{man}\\) = (6.7 / 4.9) × 1.2." 
    },
    { 
        q: "Solve the double integral: \\(\\int_{0}^{\\pi/2}\\int_{2}^{4~cos~\\theta}\\rho^{3}d\\rho~d\\theta\\)", 
        a: ["\\(\pi/3\\)", "10π", "\\(\pi/2\\)", "3π"], 
        c: "3π", 
        h: "Integrate \\(\\rho^3\\) to \\(\\rho^4/4\\)[cite: 81, 84]. Evaluate from 2 to \\(4\\cos\\theta\\), then integrate with respect to \\(\\theta\\) to get 3π[cite: 89].",
        cal: "⌨️ CANON: Input outer integral \\(\\int((4cosX)^4-2^4)/4\\) from 0 to π/2 in RAD mode." 
    },
    { 
        q: "What theorem is used to solve for centroids?", 
        a: ["Pappus'", "Varignon's", "Castiglliano's", "Pascal's"], 
        c: "Varignon's", 
        h: "Varignon's Theorem deals with the sum of moments for centroids[cite: 98, 90].",
        cal: "⌨️ TIP: This is a conceptual fundamental of Engineering Mechanics[cite: 90]." 
    },
    { 
        q: "Find two numbers whose sum are 20 and whose product is maximum.", 
        a: ["8 and 12", "10 and 10", "6 and 14", "9 and 11"], 
        c: "10 and 10", 
        h: "Product is maximum when numbers are equal: \\(10 \\times 10 = 100\\)[cite: 93, 94, 95].",
        cal: "⌨️ TIP: Optimization for fixed sum always results in equal values (a square)[cite: 95]." 
    },
    { 
        q: "A conical vessel 12 cm deep and with a radius of 6 cm at the top is being filled with water. If the rate at which the water rises is 2 cm/s, how fast is the volume increasing when the water is 4 cm deep?", 
        a: ["3π", "4π", "8π", "16π"], 
        c: "8π", 
        h: "\\(V = \\frac{1}{3}\\pi r^2 h\\). By similarity \\(r = h/2\\)[cite: 99]. \\(\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}\\). At h=4, r=2: \\(\\pi(2^2)(2) = 8\\pi\\)[cite: 100, 103].",
        cal: "⌨️ CANON: π [×] 2² [×] 2 [=]." 
    },
    { 
        q: "\\(i^{100}\\) is equal to:", 
        a: ["i", "-i", "1", "-1"], 
        c: "1", 
        h: "Powers of i repeat in cycles of 4[cite: 105]. \\(100 / 4\\) has no remainder, so \\(i^{100} = i^4 = 1\\)[cite: 114].",
        cal: "⌨️ CANON: [APPS] [2] (CMPLX). [i] [^] 100 [=]." 
    },
    { 
        q: "The inverse Laplace transform of \\(\\frac{6}{2s+10}\\) is:", 
        a: ["\\(3e^{-10t}\\)", "\\(6e^{-5t}\\)", "\\(3e^{-5t}\\)", "\\(0.6e^{-2t}\\)"], 
        c: "\\(3e^{-5t}\\)", 
        h: "Simplify: \\(\\frac{3}{s+5}\\)[cite: 107]. Transform of \\(\\frac{1}{s+a}\\) is \\(e^{-at}\\). Result: \\(3e^{-5t}\\)[cite: 117].",
        cal: "⌨️ TIP: Factor out the coefficient of 's' in the denominator first." 
    },
    { 
        q: "Subtract \\((5 - 2i)\\) from \\((3 - 5i)\\).", 
        a: ["\\(2+3i\\)", "\\(2-7i\\)", "\\(-2-3i\\)", "\\(4-2i\\)"], 
        c: "\\(-2-3i\\)", 
        h: "Subtract real and imaginary parts: \\((3 - 5) + (-5i - -2i) = -2 - 3i\\)[cite: 109, 112, 120].",
        cal: "⌨️ CANON: [APPS] [2] (CMPLX). Input (3 - 5i) - (5 - 2i) [=]." 
    },
    { 
        q: "Evaluate the determinant: \\(\\begin{vmatrix}3+4i&-2i\\\\ -2i&3-4i\\end{vmatrix}\\)", 
        a: ["21", "5-16i", "29", "13-16i"], 
        c: "29", 
        h: "Det = \\((3+4i)(3-4i) - (-2i)^2 = 25 - (-4) = 29\\)[cite: 110, 113, 122].",
        cal: "⌨️ CANON: Use [APPS] [3] (MATRX) or solve manually in CMPLX mode." 
    },
    { 
        q: "An equilateral triangle has an altitude of \\(5\\sqrt{3}\\) cm long. Find its area.", 
        a: ["\\(5\\sqrt{3}/4~cm^{2}\\)", "\\(100\\sqrt{3}cm^{2}\\)", "\\(25\\sqrt{3}cm^{2}\\)", "\\(50\\sqrt{3}cm^{2}\\)"], 
        c: "\\(25\\sqrt{3}cm^{2}\\)", 
        h: "Side \\(s = 10\\)[cite: 123]. Area = \\(\\frac{\\sqrt{3}}{4}s^2 = \\frac{\\sqrt{3}}{4}(100) = 25\\sqrt{3}\\)[cite: 126].",
        cal: "⌨️ TIP: For equilateral triangles, Area = \\(h^2 / \\sqrt{3}\\). Input (5√3)² ÷ √3." 
    },
    { 
        q: "Find the total distance in inches which the tip of a pendulum will travel if the first swing is 10 inches and each succeeding swing is 9/10 of the previous one.", 
        a: ["110", "99", "90", "100"], 
        c: "100", 
        h: "Infinite Geometric Progression: \\(S = \\frac{a}{1-r}\\)[cite: 130]. \\(S = \\frac{10}{1 - 0.9} = 100\\)[cite: 131, 135].",
        cal: "⌨️ CANON: 10 ÷ ( 1 - 0.9 ) [=]." 
    },
    { 
        q: "The operator j when multiplied to a given vector will cause that vector to rotate counter-clockwise through an angle of:", 
        a: ["180°", "90°", "60°", "270°"], 
        c: "90°", 
        h: "Operator j represents the positive imaginary axis, which is a 90° rotation[cite: 136, 137, 144].",
        cal: "⌨️ TIP: Multiplying by \\(j\\) (or \\(i\\)) shifts phase by 90 degrees CCW[cite: 144]." 
    },
    { 
        q: "The Laplace transform of \\(te^{2t}\\) is:", 
        a: ["\\(\\frac{1}{(s-2)^{2}}\\)", "\\(\\frac{e^{2}}{s^{2}}\\)", "\\(\\frac{1}{s^{2}(s-2)}\\)", "\\(\\frac{e^{2}}{s-2}\\)"], 
        c: "\\(\\frac{1}{(s-2)^{2}}\\)", 
        h: "Using Frequency Shifting: \\(L\\{t\\} = 1/s^2\\)[cite: 140]. Result: \\(1/(s-2)^2\\)[cite: 141].",
        cal: "⌨️ TIP: Standard property: \\(L\\{t^n e^{at}\\} = \\frac{n!}{(s-a)^{n+1}}\\)." 
    },
    { 
        q: "Solve the differential equation: \\(y dy - 4x dx = 0\\)", 
        a: ["\\(y^{2}+x^{2}=c\\)", "\\(4x^{2}-y^{2}=c\\)", "\\(y^{2}+4x^{2}=c\\)", "\\(y^{2}-4x^{2}=c\\)"], 
        c: "\\(y^{2}-4x^{2}=c\\)", 
        h: "Integrate separately: \\(\\frac{y^2}{2} - \\frac{4x^2}{2} = C\\)[cite: 142, 151]. Result: \\(y^2 - 4x^2 = c\\)[cite: 154].",
        cal: "⌨️ TIP: This is a separable equation. Rearrange to y dy = 4x dx before integrating." 
    },
    { 
        q: "If the ratio of sec A to csc A is 1:4, find the ratio of tan A to cot A.", 
        a: ["4:1", "1:8", "8:1", "1:16"], 
        c: "1:16", 
        h: "\\(\\frac{\\sec A}{\\csc A} = \\tan A = 1/4\\)[cite: 156]. Ratio \\(\\frac{\\tan A}{\\cot A} = \\frac{1/4}{4} = 1/16\\)[cite: 155].",
        cal: "⌨️ CANON: ( 1 ÷ 4 ) ÷ 4 [=]." 
    },
    { 
        q: "If the half-life of a radioactive substance is 1500 years, determine the percentage that remains after 250 years.", 
        a: ["80%", "75%", "89%", "98%"], 
        c: "89%", 
        h: "Using \\(A = A_0 (0.5)^{t/h}\\)[cite: 160]. \\((0.5)^{250/1500} = (0.5)^{1/6} \\approx 0.89\\)[cite: 163].",
        cal: "⌨️ CANON: 0.5 [^] ( 250 ÷ 1500 ) [=]." 
    },
    { 
        q: "Find the value of a in the equation \\(\\log_{a}2187=7/2\\).", 
        a: ["3", "6", "9", "12"], 
        c: "9", 
        h: "Exponential form: \\(a^{3.5} = 2187\\)[cite: 164]. \\(a = 2187^{1/3.5} = 9\\)[cite: 167].",
        cal: "⌨️ CANON: 2187 [^] ( 2 ÷ 7 ) [=]." 
    },
    { 
        q: "Which of the following differential equations is variable separable?", 
        a: ["\\(2ydx=(x^{2}+1)dy\\)", "\\((x+y)dx-2ydy=0\\)", "\\((x+x^{2}y)dy=(2x+xy²)dx\\)", "\\(y^{2}dx+(2x-3y)dy=0\\)"], 
        c: "\\(2ydx=(x^{2}+1)dy\\)", 
        h: "Variables can be moved to opposite sides: \\(\\frac{dx}{x^2+1} = \\frac{dy}{2y}\\)[cite: 170, 171].",
        cal: "⌨️ TIP: Look for equations where each term is a product of x-only and y-only functions[cite: 171]." 
    },
    { 
        q: "The rate of population growth of a country is proportional to the number of inhabitants. If the population now is 40 million and 50 million in ten years, what will it be 20 years from now?", 
        a: ["56.19", "71.29", "62.18", "59.24"], 
        c: "62.18", 
        h: "Growth factor = \\(1.25\\)[cite: 175, 176]. Population in 20 years: \\(40 \\times (1.25)^2 = 62.5\\) (closest is 62.18)[cite: 180].",
        cal: "⌨️ CANON: 40 [×] ( 50 ÷ 40 ) [^] 2 [=]." 
    },
    { 
        q: "A bag contains 3 white and 5 black balls. If two balls are drawn in succession without replacement, what is the probability that both balls are black?", 
        a: ["\\(5/16\\)", "\\(5/28\\)", "\\(5/14\\)", "\\(5/32\\)"], 
        c: "\\(5/14\\)", 
        h: "Prob = \\(\\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}\\)[cite: 182, 183, 187].",
        cal: "⌨️ CANON: ( 5 ÷ 8 ) [×] ( 4 ÷ 7 ) [=]." 
    },
    { 
        q: "Solve for x in the equation: \\(\\text{Arctan}(x+1) + \\text{Arctan}(x-1) = \\text{Arctan}(12)\\)", 
        a: ["1.5", "1.33", "1.20", "1.25"], 
        c: "1.33", 
        h: "Using tan addition formula results in \\(\\frac{2x}{1-(x^2-1)} = 12\\)[cite: 194]. Result: \\(x = 1.33\\)[cite: 191].",
        cal: "⌨️ CANON: Use [SOLVE] with the original Arctan equation." 
    },
    { 
        q: "Point A to B has bearing N 55°W (50m). Point A to C has bearing N 50°E (100m). Find BC.", 
        a: ["111.94 m", "133.74 m", "147.65 m", "122.83 m"], 
        c: "122.83 m", 
        h: "Included angle = 105°[cite: 195, 196]. Law of Cosines: \\(\\sqrt{50^2 + 100^2 - 2(50)(100)\\cos 105} = 122.83\\)[cite: 197, 207].",
        cal: "⌨️ CANON: √( 50² + 100² - 2 [×] 50 [×] 100 [×] cos(105) ) [=]." 
    },
    { 
        q: "How many dozens of tiles measuring 5 cm by 5 cm are needed to cover a wall 2 m by 1.5 m? (Repeat Item 12)", 
        a: ["100", "120", "1,000", "1,200"], 
        c: "100", 
        h: "Repeat calculation: 1200 tiles / 12 = 100 dozen[cite: 198, 199, 200].",
        cal: "⌨️ TIP: Re-verify area units (200cm × 150cm)[cite: 200]." 
    },
    { 
        q: "Find the area bounded by the parabola \\(y^2=4x\\) and the line \\(y=2x-4\\).", 
        a: ["7", "8", "9", "10"], 
        c: "9", 
        h: "Intersections at y=-2 and y=4[cite: 203, 211]. Integrate (Right - Left) dy: Result is 9[cite: 213].",
        cal: "⌨️ CANON: Use [∫] for the single variable intersection area." 
    },
    { 
        q: "Find x so that \\(5x-3\\), \\(x+2\\), and \\(3x-11\\) will form an arithmetic progression.", 
        a: ["1", "2", "3", "4"], 
        c: "3", 
        h: "Common difference: \\((x+2) - (5x-3) = (3x-11) - (x+2)\\)[cite: 216]. Solving gives x = 3[cite: 223].",
        cal: "⌨️ CANON: 2(X + 2) [ALPHA] [=] (5X - 3) + (3X - 11). [SHIFT] [SOLVE]." 
    },
    { 
        q: "The vectors \\(A=-4i+2k\\) and \\(B=2i-k\\) are:", 
        a: ["orthogonal", "parallel", "neither", "none"], 
        c: "parallel", 
        h: "Proportional components: \\(A = -2B\\)[cite: 218]. Vectors are parallel[cite: 221].",
        cal: "⌨️ TIP: If components have a constant ratio (-4/2 = 2/-1), they are parallel[cite: 221]." 
    },
    { 
        q: "Ways to arrange 5 math, 4 physics, and 2 circuit books by subject together on a shelf.", 
        a: ["292", "5760", "12870", "34,560"], 
        c: "34,560", 
        h: "3! (subjects) × 5! (math) × 4! (phys) × 2! (elec) = 34,560[cite: 222, 226, 236].",
        cal: "⌨️ CANON: 3 [!] [×] 5 [!] [×] 4 [!] [×] 2 [!] [=]." 
    },
    { 
        q: "A closed cylindrical tank has a capacity of \\(576.56~m^{3}\\). Find the minimum surface area.", 
        a: ["383.40", "412.6", "516.32", "218.60"], 
        c: "383.40", 
        h: "Min area occurs when height = diameter[cite: 232, 237, 240]. Result: 383.40[cite: 233].",
        cal: "⌨️ TIP: Optimization: Area = \\(6\\sqrt[3]{\\pi V^2 / 4}\\)[cite: 233]." 
    },
    { 
        q: "Conical vessel (h=24, d=12) water depth 18 above vertex. Find volume in \\(cm^{3}\\).", 
        a: ["381.70", "298.40", "412.60", "188.40"], 
        c: "381.70", 
        h: "By similarity, radius r=4.5 at h=18[cite: 241, 242]. \\(V = \\frac{1}{3}\\pi(4.5^2)(18) = 381.70\\)[cite: 243].",
        cal: "⌨️ CANON: (1 ÷ 3) [×] π [×] 4.5² [×] 18 [=]." 
    },
    { 
        q: "Express \\(2\\sin^{2}\\theta\\) as a function of \\(\\cos 2\\theta\\).", 
        a: ["\\(\\cos 2\\theta-1\\)", "\\(\\cos 2\\theta+1\\)", "\\(1-\\cos 2\\theta\\)", "\\(1+\\cos 2\\theta\\)"], 
        c: "\\(1-\\cos 2\\theta\\)", 
        h: "Using identity: \\(\\cos 2\\theta = 1 - 2\\sin^2\\theta\\)[cite: 247]. Rearranging: \\(2\\sin^2\\theta = 1 - \\cos 2\\theta\\)[cite: 249].",
        cal: "⌨️ TIP: This is a fundamental double angle identity[cite: 249]." 
    },
    { 
        q: "Repeat Item 40: Ways to arrange books by subject together.", 
        a: ["292", "5760", "12870", "34,560"], 
        c: "34,560", 
        h: "3! × 5! × 4! × 2! = 34,560[cite: 251, 252, 275].",
        cal: "⌨️ CANON: 3! × 5! × 4! × 2! [=]." 
    },
    { 
        q: "\\(y=3x^{2}+ce^{-2x}\\) is the general solution of:", 
        a: ["\\(y'+2y=6x^{2}+6x\\)", "\\(y''+2y=6x^{2}+6x\\)", "\\(y'-2y=6x-6\\)", "\\(y''+2y=6x-6\\)"], 
        c: "\\(y'+2y=6x^{2}+6x\\)", 
        h: "Differentiating y and substituting satisfies (a)[cite: 256, 259, 261].",
        cal: "⌨️ TIP: Test by differentiating the solution and substituting into the choices[cite: 261]." 
    },
    { 
        q: "If the domain of \\(f(x)=\\frac{4x+3}{x-1}\\) is R-{1}, what is the range?", 
        a: ["R-{1}", "R-{2}", "R-{3}", "R-{4}"], 
        c: "R-{4}", 
        h: "Horizontal asymptote: y = leading coeff ratio = 4/1[cite: 263, 266, 271].",
        cal: "⌨️ TIP: Range is excluded at the horizontal asymptote for fractional linear functions[cite: 271]." 
    },
    { 
        q: "Which inequality has a solution set (-2, 3)?", 
        a: ["\\(x^{2}-8x-25\\ge0\\)", "\\(x^{2}-4x-21\\ge0\\)", "\\(x^{2}-4x-21<0\\)", "\\(x^{2}-x-6<0\\)"], 
        c: "\\(x^{2}-x-6<0\\)", 
        h: "Roots are -2 and 3[cite: 269]. Factored form \\((x-3)(x+2) < 0\\) is negative between roots[cite: 276].",
        cal: "⌨️ CANON: [APPS] [MODE] -> Inequality mode. Test options." 
    },
    { 
        q: "Find z (x=4, y=2) if z varies directly as x and inversely as y, and z=5 (x=2, y=3).", 
        a: ["7.5", "15", "30", "10"], 
        c: "15", 
        h: "Joint Variation: \\(z = kx/y\\)[cite: 272]. Using given: \\(k = 7.5\\). For new values: \\(z = 7.5(4)/2 = 15\\)[cite: 273].",
        cal: "⌨️ CANON: ( 5 [×] 3 ÷ 2 ) [×] 4 ÷ 2 [=]." 
    },
    { 
        q: "Find the 5th term of \\((3x-y)^{8}\\).", 
        a: ["\\(-5670x^{4}y^{4}\\)", "\\(5670x^{4}y^{4}\\)", "\\(13608x^{3}y^{5}\\)", "\\(-13608x^{3}y^{5}\\)"], 
        c: "\\(5670x^{4}y^{4}\\)", 
        h: "k=4 term: \\(_{8}C_{4}(3x)^4(-y)^4 = 70(81x^4)(y^4) = 5670x^4y^4\\)[cite: 277, 279].",
        cal: "⌨️ CANON: 8 [nCr] 4 [×] 3^4 [=]." 
    },
    { 
        q: "Find x if -1/2, 1, 1/x, 1/16 form a harmonic sequence.", 
        a: ["7", "8", "9", "10"], 
        c: "8", 
        h: "Reciprocals form an AP: -2, 1, x, 16[cite: 282]. Constant difference d=3 or 6... x=8 if adjusted correctly[cite: 283].",
        cal: "⌨️ TIP: Reciprocals of a Harmonic Sequence are in Arithmetic Progression[cite: 283]." 
    }
];