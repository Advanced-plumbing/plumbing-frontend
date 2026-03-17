export interface Blog {
    id: string;
    title: string;
    author: string;
    date: string;
    slug: string;
    preview: string;
    image: string;
    content: string;
}

export const BLOGS: Blog[] = [
    {
        id: "1",
        title: "5 Reasons to Install a Sump Pump in Your Basement",
        author: "Adrian@abconsultingg.com",
        date: "December 3, 2024",
        slug: "reasons-install-sump-pump",
        preview: "Your basement might be out of sight, but it should never be out of mind—especially when it comes to protecting it from water damage...",
        image: "/images/blog/reasons-install-sump-pump.jpg",
        content: `
            <p>Basements are prone to flooding, especially during heavy Midwest rainfalls. A sump pump is your first line of defense against water damage.</p>
            <h3>Top Benefits</h3>
            <ol>
                <li><strong>Prevents Flooding:</strong> Automatically pumps out water before it reaches your floor.</li>
                <li><strong>Reduces Mold & Mildew:</strong> Keeps humidity levels down by removing standing water.</li>
                <li><strong>Protects Appliances:</strong> Keeps furnaces and water heaters safe from rising water.</li>
                <li><strong>Increases Property Value:</strong> A dry, protected basement is a huge selling point.</li>
                <li><strong>Peace of Mind:</strong> Sleep easy during thunderstorms knowing your home is guarded.</li>
            </ol>
        `
    },
    {
        id: "2",
        title: "How to Prevent Frozen Pipes This Winter",
        author: "Adrian@abconsultingg.com",
        date: "December 3, 2024",
        slug: "prevent-frozen-pipes-winter",
        preview: "Winter is here, and while the season brings snow and cozy nights, it can also bring a hidden danger to your home: frozen pipes...",
        image: "/images/blog/prevent-frozen-pipes-winter.jpg",
        content: `
            <p>When water freezes in your pipes, it expands with enough force to burst even the strongest metal. Prevention is much cheaper than repair.</p>
            <h3>Proactive Measures</h3>
            <ul>
                <li><strong>Open Cabinet Doors:</strong> Allow warm air to circulate around pipes under sinks.</li>
                <li><strong>Drip Your Faucets:</strong> A slow drip keeps water moving, making it harder to freeze.</li>
                <li><strong>Seal Wall Leaks:</strong> Check for drafts near plumbing lines.</li>
            </ul>
            <p>If you suspect a pipe is already frozen, turn off your main water supply immediately and call the pros.</p>
        `
    },
    {
        id: "3",
        title: "How Does a Sewer Camera Inspection Work?",
        author: "Adrian@abconsultingg.com",
        date: "December 3, 2024",
        slug: "sewer-camera-inspection-guide",
        preview: "If you’re dealing with recurring clogs, slow drains, or mysterious plumbing issues, a sewer camera inspection could be the key to uncovering the problem...",
        image: "/images/blog/sewer-camera-inspection-guide.jpg",
        content: `
            <p>Traditional plumbing diagnosis often involved guesswork. With a sewer camera inspection, we take the mystery out of the equation using high-definition fiber optic cameras.</p>
            <h3>The Process</h3>
            <p>We insert a flexible, waterproof camera into your sewer line, allowing us to see real-time footage of the pipe's interior.</p>
            <ul>
                <li><strong>Identify Clogs:</strong> Pinpoint exactly where tree roots or debris are causing issues.</li>
                <li><strong>Check Structural Integrity:</strong> Find cracks or collapsed sections before they fail.</li>
                <li><strong>Save Money:</strong> Avoid digging up your yard just to find a leak.</li>
            </ul>
        `
    },
    {
        id: "4",
        title: "Winterizing Your Plumbing: Essential Tips for Midwest Homeowners",
        author: "Adrian@abconsultingg.com",
        date: "February 7, 2025",
        slug: "winterizing-your-plumbing-midwest",
        preview: "Winters in the Midwest are no joke. Between freezing temperatures and unexpected weather swings, your plumbing can take a serious hit if not properly prepared...",
        image: "/images/blog/winterizing-your-plumbing-midwest.png",
        content: `
            <p>Winters in the Midwest are no joke. Between freezing temperatures and unexpected weather swings, your plumbing can take a serious hit if not properly prepared. Frozen pipes, burst lines, and water damage are just a few of the challenges homeowners face.</p>
            <h3>Why Winterizing Matters</h3>
            <p>Winterizing your plumbing isn’t just for peace of mind—it’s a necessary step to protect your home and wallet. Properly winterized plumbing ensures your system runs smoothly, even in freezing conditions.</p>
            <ul>
                <li><strong>Insulate Your Pipes:</strong> Use foam insulation in unheated areas.</li>
                <li><strong>Shut Off Outdoor Faucets:</strong> Drain remaining water and cover them.</li>
                <li><strong>Keep Your Thermostat Consistent:</strong> Maintain at least 55°F.</li>
            </ul>
        `
    },
    {
        id: "5",
        title: "Choosing the Right HVAC System for Your Midwest Home",
        author: "Adrian@abconsultingg.com",
        date: "February 5, 2025",
        slug: "choosing-right-hvac-system-midwest",
        preview: "Choosing the best HVAC system for your Midwest home requires thoughtful consideration of several factors. The Midwest’s diverse and sometimes extreme weather...",
        image: "/images/blog/choosing-right-hvac-system-midwest.png",
        content: `
            <p>The Midwest’s diverse weather—freezing winters and hot, humid summers—requires an HVAC system that is both powerful and efficient.</p>
            <h3>What to Consider</h3>
            <p>When selecting a system, you need to balance energy efficiency with performance during peak seasons.</p>
            <ul>
                <li><strong>SEER Ratings:</strong> Higher ratings mean better efficiency for summer cooling.</li>
                <li><strong>Heating Capacity:</strong> Ensure your furnace can handle sub-zero temperatures.</li>
                <li><strong>Indoor Air Quality:</strong> Consider integrated humidifiers for dry winter air.</li>
            </ul>
            <p>Our experts at Advanced Plumbing & HVAC can help you size and select the perfect unit for your square footage.</p>
        `
    }
];