'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const IntegratedSleepArticle = () => {
    // Chart data
    const circadianData = [
        { time: '12 AM', temperature: 97.9, sleepStage: 'Deep Sleep' },
        { time: '2 AM', temperature: 97.7, sleepStage: 'Deep Sleep' },
        { time: '4 AM', temperature: 97.5, sleepStage: 'REM Sleep' },
        { time: '6 AM', temperature: 97.7, sleepStage: 'Light Sleep' },
        { time: '8 AM', temperature: 98.2, sleepStage: 'Awake' },
        { time: '10 AM', temperature: 98.6, sleepStage: 'Awake' },
        { time: '12 PM', temperature: 98.8, sleepStage: 'Awake' },
        { time: '2 PM', temperature: 99.0, sleepStage: 'Awake' },
        { time: '4 PM', temperature: 99.1, sleepStage: 'Awake' },
        { time: '6 PM', temperature: 99.1, sleepStage: 'Awake' },
        { time: '8 PM', temperature: 98.9, sleepStage: 'Awake' },
        { time: '10 PM', temperature: 98.4, sleepStage: 'Drowsy' },
    ];

    const roomTempData = [
        { temperature: 60, sleepQuality: 6.2, efficiency: 78 },
        { temperature: 62, sleepQuality: 7.1, efficiency: 82 },
        { temperature: 65, sleepQuality: 8.5, efficiency: 92 },
        { temperature: 68, sleepQuality: 8.8, efficiency: 94 },
        { temperature: 70, sleepQuality: 8.2, efficiency: 89 },
        { temperature: 72, sleepQuality: 7.4, efficiency: 83 },
        { temperature: 75, sleepQuality: 6.8, efficiency: 76 },
        { temperature: 78, sleepQuality: 5.9, efficiency: 68 },
    ];

    const nightSweatsData = [
        { cause: 'Menopause', percentage: 35, count: 350 },
        { cause: 'Sleep Environment', percentage: 25, count: 250 },
        { cause: 'Medications', percentage: 15, count: 150 },
        { cause: 'Infections', percentage: 10, count: 100 },
        { cause: 'Sleep Disorders', percentage: 8, count: 80 },
        { cause: 'Other Medical', percentage: 7, count: 70 },
    ];

    const ageTemperatureData = [
        { age: '18-30', idealTemp: 67, tolerance: 3 },
        { age: '31-45', idealTemp: 68, tolerance: 2.5 },
        { age: '46-60', idealTemp: 69, tolerance: 2 },
        { age: '60+', idealTemp: 70, tolerance: 1.5 },
    ];

    const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1', '#d084d0'];

    return (
        <article className="max-w-4xl mx-auto p-6 bg-white prose prose-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Why You Get Hot When You Sleep: The Science Behind Nighttime Overheating</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Getting hot during sleep is more common than you might think—affecting millions of people who find themselves waking up sweaty, kicking off blankets, or constantly adjusting their thermostat. While occasional warmth during sleep is normal, persistent overheating can disrupt your sleep quality and leave you feeling tired the next day.
                </p>
                <p className="text-lg text-gray-600">
                    Understanding why your body heats up at night involves complex interactions between your circadian rhythm, thermoregulation processes, and environmental factors. Let's explore what the latest sleep science reveals about nighttime temperature regulation.
                </p>
            </header>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Body's Natural Temperature Cycle During Sleep</h2>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">The Circadian Temperature Rhythm</h3>
                <p className="mb-4">
                    Your core body temperature doesn't stay constant at 98.6°F (37°C) throughout the day. Instead, it follows a predictable circadian rhythm that fluctuates by <strong>0.8 to 1°C (1.4 to 1.8°F)</strong> over 24 hours.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Daily Temperature Pattern:</h4>
                    <ul className="text-blue-800 space-y-1">
                        <li><strong>6 AM:</strong> Lowest point (around 97.7°F)</li>
                        <li><strong>6 PM:</strong> Highest point (around 99.1°F)</li>
                        <li><strong>Evening:</strong> Gradual decline begins</li>
                        <li><strong>Sleep:</strong> Continues dropping throughout the night</li>
                    </ul>
                </div>

                <p className="mb-6">
                    This natural temperature drop is crucial for initiating and maintaining sleep. During the early morning hours, core body temperature is about 0.5 degree below 37°C, and in the late afternoon, core body temperature is about 0.5 degree above 37°C.
                </p>

                {/* Chart 1: Circadian Rhythm */}
                <div className="my-8 bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">24-Hour Core Body Temperature Rhythm</h4>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={circadianData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis
                                domain={[97, 99.5]}
                                label={{ value: 'Temperature (°F)', angle: -90, position: 'insideLeft' }}
                            />
                            <Tooltip
                                formatter={(value, name) => [
                                    name === 'temperature' ? `${value}°F` : value,
                                    name === 'temperature' ? 'Core Body Temperature' : 'Sleep Stage'
                                ]}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="temperature"
                                stroke="#2563eb"
                                strokeWidth={3}
                                dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                                name="Core Body Temperature"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    <p className="mt-4 text-sm text-gray-600">
                        <strong>Key insight:</strong> Temperature naturally drops 1-2°F during sleep, with the lowest point around 4-6 AM.
                        Disruption of this pattern can lead to sleep problems.
                    </p>
                </div>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Why Your Body Temperature Drops at Night</h3>
                <p className="mb-4">
                    The evening temperature decline isn't just a byproduct of rest—it's an active biological process controlled by your hypothalamus. As the sun sets in the evening, the brain begins producing melatonin, a hormone that induces sleepiness. Core body temperature also drops, contributing to decreased alertness.
                </p>

                <p className="mb-6">This temperature drop serves several functions:</p>
                <ul className="mb-8 space-y-2">
                    <li><strong>Sleep initiation:</strong> Lower temperatures promote drowsiness</li>
                    <li><strong>Energy conservation:</strong> Reduced metabolic demands during sleep</li>
                    <li><strong>Brain restoration:</strong> Cooler temperatures support cellular repair processes</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">What Causes You to Overheat During Sleep?</h2>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">1. Disrupted Thermoregulation</h3>
                <p className="mb-4">
                    Sleep is strongly linked to thermoregulation, which is primarily controlled by circadian rhythm and sleep regulation. When this system becomes disrupted, you may experience:
                </p>
                <ul className="mb-6 space-y-2">
                    <li><strong>Inefficient heat dissipation:</strong> Your body struggles to release heat through blood vessel dilation</li>
                    <li><strong>Altered sweat response:</strong> Temperature thresholds for sweating may be shifted</li>
                    <li><strong>Sleep stage disruptions:</strong> REM sleep, in particular, can affect temperature regulation</li>
                </ul>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">2. Sleep Environment Factors</h3>
                <p className="mb-4">
                    Your bedroom environment plays a crucial role in temperature regulation. The thermal environment is one of the most important factors that can affect human sleep. Excessively high or low ambient temperature may affect sleep even in healthy humans.
                </p>

                <p className="mb-4"><strong>Environmental triggers include:</strong></p>
                <ul className="mb-6 space-y-2">
                    <li>Room temperature above 68°F (20°C)</li>
                    <li>High humidity levels</li>
                    <li>Heavy bedding or non-breathable fabrics</li>
                    <li>Poor air circulation</li>
                </ul>

                {/* Chart 2: Room Temperature vs Sleep Quality */}
                <div className="my-8 bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Optimal Room Temperature for Sleep Quality</h4>
                    <p className="text-gray-600 mb-4">
                        Research shows sleep quality peaks at specific bedroom temperatures. Too hot or too cold disrupts natural thermoregulation.
                    </p>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={roomTempData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="temperature"
                                label={{ value: 'Room Temperature (°F)', position: 'insideBottom', offset: -10 }}
                            />
                            <YAxis
                                yAxisId="left"
                                domain={[5, 10]}
                                label={{ value: 'Sleep Quality (1-10)', angle: -90, position: 'insideLeft' }}
                            />
                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                domain={[60, 100]}
                                label={{ value: 'Sleep Efficiency (%)', angle: 90, position: 'insideRight' }}
                            />
                            <Tooltip
                                formatter={(value, name) => [
                                    name === 'sleepQuality' ? `${value}/10` : `${value}%`,
                                    name === 'sleepQuality' ? 'Sleep Quality' : 'Sleep Efficiency'
                                ]}
                            />
                            <Legend />
                            <Line
                                yAxisId="left"
                                type="monotone"
                                dataKey="sleepQuality"
                                stroke="#dc2626"
                                strokeWidth={3}
                                name="Sleep Quality"
                            />
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="efficiency"
                                stroke="#059669"
                                strokeWidth={3}
                                name="Sleep Efficiency"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    <p className="mt-4 text-sm text-gray-600">
                        <strong>Optimal range:</strong> 65-68°F provides the best sleep quality and efficiency.
                        Temperatures above 70°F or below 62°F significantly impact sleep.
                    </p>
                </div>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">3. Sleep Stage-Related Temperature Changes</h3>
                <p className="mb-4">Different sleep stages affect your body's ability to regulate temperature:</p>
                <ul className="mb-6 space-y-2">
                    <li><strong>NREM Sleep:</strong> Normal thermoregulation continues</li>
                    <li><strong>REM Sleep:</strong> During REM sleep in rodents, body temperature is not regulated. In humans, thermoregulatory disruption during REM sleep is less clear cut: sweating responses are observed, but they are blunted in REM sleep</li>
                </ul>
                <p className="mb-8">
                    This means you're more vulnerable to temperature fluctuations during REM periods, which typically increase toward morning.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">The Science of Night Sweats vs. Normal Sleep Warmth</h2>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Defining Night Sweats</h3>
                <p className="mb-4">
                    Night sweats are defined as severe hot flashes occurring at night that can drench sleepwear and sheets. It's important to distinguish between:
                </p>
                <ul className="mb-6 space-y-2">
                    <li><strong>Normal sleep warmth:</strong> Feeling slightly warm and adjusting covers</li>
                    <li><strong>Night sweats:</strong> Night sweats persist even in a cool, comfortable sleeping environment. They're usually not caused by external temperature but by internal factors, such as hormonal shifts, infections, or medical conditions</li>
                </ul>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Physiological Mechanisms Behind Overheating</h3>
                <p className="mb-4">
                    Sweating helps to reduce core body temperature when it rises above certain limits or thresholds, called the thermoneutral zone (TNZ). Thermoregulatory defenses such as sweating are stimulated when threshold levels in core body temperatures trigger a hypothalamic response.
                </p>

                <p className="mb-4">Several factors can trigger this response:</p>
                <ul className="mb-8 space-y-2">
                    <li><strong>Increased heat production:</strong> From illness, medication, or metabolic changes</li>
                    <li><strong>Decreased heat dissipation:</strong> From bedding, clothing, or room conditions</li>
                    <li><strong>Shifted temperature thresholds:</strong> Due to hormonal changes or medical conditions</li>
                </ul>

                {/* Chart 3: Night Sweats Causes */}
                <div className="my-8 bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Leading Causes of Night Sweats</h4>
                    <p className="text-gray-600 mb-4">
                        Night sweats affect up to 40% of primary care patients. Understanding the most common causes helps identify solutions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={nightSweatsData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="percentage"
                                    >
                                        {nightSweatsData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => `${value}%`} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={nightSweatsData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="cause"
                                        angle={-45}
                                        textAnchor="end"
                                        height={80}
                                    />
                                    <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                                    <Tooltip formatter={(value) => `${value}%`} />
                                    <Bar dataKey="percentage" fill="#3b82f6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                        <strong>Note:</strong> Menopause and sleep environment factors account for 60% of night sweats cases.
                        Simple environmental changes can often provide significant relief.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sleep Temperature by Demographics</h2>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Gender Differences</h3>
                <p className="mb-4">
                    Recent research reveals significant differences in sleep temperature regulation between men and women:
                </p>
                <p className="mb-4">
                    Women rate their sleep quality lower than men's and report more fluctuations in their quality of sleep, corresponding to changes throughout the menstrual cycle.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Key findings:</h4>
                    <ul className="text-blue-800 space-y-2">
                        <li>Melatonin, a hormone that helps with the timing of circadian rhythms and sleep, is secreted earlier in women than men. Core body temperature, which is at its highest before sleep and its lowest a few hours before waking, follows a similar pattern, reaching its peak earlier in women than in men</li>
                        <li>Women's circadian periods are approximately 6 minutes shorter than men's</li>
                        <li>Men had a greater nocturnal drop in body temperature, probably due to their having a higher temperature at lights-out</li>
                    </ul>
                </div>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Age-Related Changes</h3>
                <p className="mb-4">
                    The circadian rhythm amplitude of CBT is reduced in older people, mainly due to elevated CBT at night. This means older adults may experience:
                </p>
                <ul className="mb-6 space-y-2">
                    <li>Less dramatic temperature drops at night</li>
                    <li>More difficulty with heat dissipation</li>
                    <li>Increased sensitivity to environmental temperature</li>
                </ul>

                {/* Chart 4: Age-Related Temperature Preferences */}
                <div className="my-8 bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Sleep Temperature Preferences by Age</h4>
                    <p className="text-gray-600 mb-4">
                        Aging affects thermoregulation, with older adults preferring slightly warmer sleep environments and having less temperature tolerance.
                    </p>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={ageTemperatureData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="age" />
                            <YAxis
                                yAxisId="left"
                                domain={[65, 72]}
                                label={{ value: 'Ideal Temperature (°F)', angle: -90, position: 'insideLeft' }}
                            />
                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                domain={[0, 4]}
                                label={{ value: 'Temperature Tolerance (±°F)', angle: 90, position: 'insideRight' }}
                            />
                            <Tooltip
                                formatter={(value, name) => [
                                    `${value}${name === 'idealTemp' ? '°F' : '±°F'}`,
                                    name === 'idealTemp' ? 'Ideal Temperature' : 'Temperature Tolerance'
                                ]}
                            />
                            <Legend />
                            <Bar yAxisId="left" dataKey="idealTemp" fill="#3b82f6" name="Ideal Temperature" />
                            <Bar yAxisId="right" dataKey="tolerance" fill="#ef4444" name="Temperature Tolerance" />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="mt-4 text-sm text-gray-600">
                        <strong>Trend:</strong> Older adults prefer warmer sleep environments (70°F vs 67°F for younger adults)
                        but have reduced tolerance for temperature variations.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Medical Conditions That Cause Sleep Overheating</h2>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Hormonal Changes</h3>
                <p className="mb-4">
                    <strong>Menopause:</strong> Night sweats are hot flashes that occur during sleep. Most women experience these symptoms during menopause, and it's not uncommon for a woman experiencing these to wake up during the night feeling overheated and sweaty
                </p>

                <p className="mb-4"><strong>Other hormonal conditions</strong> that can affect sleep temperature:</p>
                <ul className="mb-6 space-y-2">
                    <li>Hyperthyroidism</li>
                    <li>Low testosterone (in men)</li>
                    <li>Diabetes-related blood sugar fluctuations</li>
                </ul>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Sleep Disorders</h3>
                <p className="mb-4">Certain sleep disorders can disrupt normal temperature regulation:</p>
                <ul className="mb-6 space-y-2">
                    <li><strong>Sleep apnea:</strong> Breathing interruptions can trigger stress responses</li>
                    <li><strong>Periodic limb movement:</strong> Physical movement generates heat</li>
                    <li><strong>Insomnia:</strong> Stress and hyperarousal can elevate body temperature</li>
                </ul>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Medications</h3>
                <p className="mb-4">Many medications can affect thermoregulation:</p>
                <ul className="mb-8 space-y-2">
                    <li>Antidepressants</li>
                    <li>Hormone replacement therapy</li>
                    <li>Certain blood pressure medications</li>
                    <li>Fever-reducing medications (paradoxically)</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Evidence-Based Solutions for Sleep Temperature Control</h2>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Optimize Your Sleep Environment</h3>
                <p className="mb-4">
                    <strong>Ideal bedroom temperature:</strong> The ideal environment for sleep should be cool, ideally between 60 and 68 degrees Fahrenheit
                </p>

                <p className="mb-4"><strong>Environmental modifications:</strong></p>
                <ul className="mb-6 space-y-2">
                    <li>Use a bedroom fan for air circulation</li>
                    <li>Choose breathable, moisture-wicking bedding</li>
                    <li>Consider blackout curtains to reduce heat from sunlight</li>
                    <li>Invest in a cooling mattress or mattress topper</li>
                </ul>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Bedding and Sleepwear Choices</h3>
                <p className="mb-4">
                    Wear loose-fitting, lightweight, cotton or linen pajamas to bed. These airy, breathable fabrics can help you stay cool and dry by wicking away moisture
                </p>

                <p className="mb-4"><strong>Material recommendations:</strong></p>
                <ul className="mb-6 space-y-2">
                    <li>Natural fibers (cotton, bamboo, linen)</li>
                    <li>Moisture-wicking synthetic blends</li>
                    <li>Avoid heavy or synthetic materials that trap heat</li>
                </ul>

                <h3 className="text-2xl font-medium text-gray-700 mb-4">Pre-Sleep Temperature Regulation</h3>
                <p className="mb-4"><strong>Cooling strategies 1-2 hours before bed:</strong></p>
                <ul className="mb-8 space-y-2">
                    <li>Take a warm bath (paradoxically helps cool your core temperature)</li>
                    <li>Avoid heavy meals that increase metabolic heat</li>
                    <li>Stay hydrated, but avoid excessive fluids close to bedtime</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">When to See a Healthcare Provider</h2>
                <p className="mb-4">
                    If your night sweats occur on a regular basis, interrupt your sleep, or are accompanied by a fever or other symptoms, such as unexplained weight loss, then you should schedule an appointment with your physician
                </p>

                <div className="bg-red-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">Red flags requiring medical attention:</h4>
                    <ul className="text-red-800 space-y-2">
                        <li>Night sweats that drench sleepwear and sheets</li>
                        <li>Accompanying symptoms: fever, weight loss, fatigue</li>
                        <li>Sudden onset of severe night sweats</li>
                        <li>Sleep disruption affecting daily functioning</li>
                    </ul>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Key Takeaways</h2>
                <p className="mb-4">Understanding why you get hot during sleep helps you address the issue effectively:</p>

                <div className="bg-blue-600 p-6 rounded-lg" style={{ backgroundColor: '#2563eb', color: 'white' }}>
                    <ol className="text-white space-y-3" style={{ color: 'white' }}>
                        <li><strong>Normal temperature fluctuation</strong> follows a circadian rhythm with a natural evening decline</li>
                        <li><strong>Sleep stage transitions</strong> can temporarily disrupt temperature regulation</li>
                        <li><strong>Environmental factors</strong> play a crucial role in thermal comfort</li>
                        <li><strong>Individual differences</strong> in age, gender, and health status affect temperature regulation</li>
                        <li><strong>Medical conditions</strong> may require professional evaluation and treatment</li>
                    </ol>
                </div>

                <p className="mt-6">
                    By optimizing your sleep environment and understanding your body's natural temperature patterns, you can minimize nighttime overheating and improve your sleep quality.
                </p>
            </section>

            <footer className="border-t pt-8 mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sources</h3>
                <ol className="text-sm text-gray-600 space-y-2">
                    <li>1. Refinetti, R. (2020). Circadian rhythmicity of body temperature and metabolism. <em>Temperature</em>, 7(4), 321-362.</li>
                    <li>2. Okamoto-Mizuno, K., & Mizuno, K. (2012). Effects of thermal environment on sleep and circadian rhythm. <em>Journal of Physiological Anthropology</em>, 31(1), 14.</li>
                    <li>3. Harding, E. C., et al. (2020). Sleep and thermoregulation. <em>Current Opinion in Physiology</em>, 15, 7-13.</li>
                    <li>4. Lok, R., et al. (2024). Sex differences in sleep, circadian rhythms, and metabolism: Implications for precision medicine. <em>Sleep Medicine Reviews</em>, 75, 101926.</li>
                    <li>5. Baker, F. C., et al. (2001). Sleep and 24 hour body temperatures: A comparison in young men, naturally cycling women and women taking hormonal contraceptives. <em>The Journal of Physiology</em>, 530(2), 565-574.</li>
                    <li>6. Mold, J. W., et al. (2012). Night sweats: A systematic review of the literature. <em>The Journal of the American Board of Family Medicine</em>, 25(6), 878-893.</li>
                    <li>7. Sleep Foundation. (2020). Night sweats. Retrieved from sleepfoundation.org</li>
                    <li>8. PhysiologyWeb. (2015). Circadian rhythm of core body temperature. Retrieved from physiologyweb.com</li>
                </ol>
            </footer>
        </article>
    );
};

export default IntegratedSleepArticle;